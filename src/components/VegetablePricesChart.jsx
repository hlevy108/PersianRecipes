import { useEffect, useMemo, useRef, useState } from 'react'

function parseCsv(text) {
  const rows = []
  const header = []
  let i = 0
  let field = ''
  let inQuotes = false
  let row = []
  let isHeader = true
  while (i < text.length) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        } else {
          inQuotes = false
          i++
          continue
        }
      } else {
        field += char
        i++
        continue
      }
    } else {
      if (char === '"') {
        inQuotes = true
        i++
        continue
      }
      if (char === ',') {
        row.push(field)
        field = ''
        i++
        continue
      }
      if (char === '\r') {
        i++
        continue
      }
      if (char === '\n') {
        row.push(field)
        field = ''
        if (isHeader) {
          for (const h of row) header.push(h)
          isHeader = false
        } else if (row.length === header.length) {
          const obj = {}
          for (let j = 0; j < header.length; j++) {
            obj[header[j]] = row[j]
          }
          rows.push(obj)
        }
        row = []
        i++
        continue
      }
      field += char
      i++
      continue
    }
  }
  // flush last line if file didn't end with newline
  if (field.length || row.length) {
    row.push(field)
    if (isHeader) {
      for (const h of row) header.push(h)
    } else if (row.length === header.length) {
      const obj = {}
      for (let j = 0; j < header.length; j++) {
        obj[header[j]] = row[j]
      }
      rows.push(obj)
    }
  }
  return rows
}

function useContainerWidth() {
  const ref = useRef(null)
  const [width, setWidth] = useState(800)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect?.width ?? el.clientWidth ?? 800
        setWidth(Math.max(320, Math.floor(w)))
      }
    })
    ro.observe(el)
    setWidth(el.clientWidth || 800)
    return () => ro.disconnect()
  }, [])
  return [ref, width]
}

export default function VegetablePricesChart() {
  const [ref, width] = useContainerWidth()
  const [rows, setRows] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    async function load() {
      try {
        setLoading(true)
        const res = await fetch('/Vegetable-Prices-2022.csv')
        if (!res.ok) throw new Error(`Failed to load CSV (${res.status})`)
        const text = await res.text()
        if (isCancelled) return
        const parsed = parseCsv(text)
        setRows(parsed)
      } catch (e) {
        setError(e?.message || 'Failed to load data')
      } finally {
        if (!isCancelled) setLoading(false)
      }
    }
    load()
    return () => {
      isCancelled = true
    }
  }, [])

  const fresh = useMemo(() => {
    const filtered = rows.filter((r) => (r.Form || '').trim().toLowerCase() === 'fresh')
    return filtered
      .map((r) => ({
        vegetable: r.Vegetable,
        price: Number(r.RetailPrice),
      }))
      .filter((d) => Number.isFinite(d.price))
  }, [rows])

  const data = useMemo(() => {
    const sorted = [...fresh].sort((a, b) => b.price - a.price)
    return sorted
  }, [fresh])

  const margin = { top: 24, right: 24, bottom: 24, left: 260 }
  const barGap = 6
  const barHeight = 22
  const innerWidth = Math.max(200, width - margin.left - margin.right)
  const height = margin.top + margin.bottom + data.length * (barHeight + barGap)
  const maxPrice = data.reduce((m, d) => Math.max(m, d.price), 0)

  function xScale(v) {
    if (maxPrice <= 0) return 0
    return (v / maxPrice) * innerWidth
  }

  if (loading) {
    return (
      <section className="chart-section" ref={ref}>
        <p>Loading vegetable prices…</p>
      </section>
    )
  }
  if (error) {
    return (
      <section className="chart-section" ref={ref}>
        <p style={{ color: '#e33' }}>Error: {error}</p>
      </section>
    )
  }
  if (!data.length) {
    return (
      <section className="chart-section" ref={ref}>
        <p>No data available.</p>
      </section>
    )
  }

  return (
    <section className="chart-section" ref={ref} style={{ marginTop: 32 }}>
      <h2 style={{ margin: '0 0 8px' }}>Fresh vegetable retail prices (per pound)</h2>
      <small style={{ opacity: 0.8 }}>Source: USDA ERS (2022)</small>
      <p style={{ margin: '8px 0 12px', opacity: 0.9 }}>
        Each bar represents one fresh vegetable. Bar length shows the average 2022 retail price per pound.
      </p>
      <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
        <svg
          role="img"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        >
          <desc>Horizontal bar chart of fresh vegetable retail prices per pound</desc>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <text
              x={innerWidth}
              y={-24}
              textAnchor="end"
              style={{ fontSize: 12, fontWeight: 500 }}
            >
              Price ($/lb)
            </text>
            {data.map((d, idx) => {
              const y = idx * (barHeight + barGap)
              const w = xScale(d.price)
              return (
                <g key={d.vegetable} transform={`translate(0,${y})`}>
                  <title>{`${d.vegetable}: $${d.price.toFixed(2)} per lb`}</title>
                  <rect
                    x={0}
                    y={0}
                    width={Math.max(1, w)}
                    height={barHeight}
                    rx={4}
                    fill="#4f46e5"
                    opacity="0.9"
                  />
                  {w > 100 ? (
                    <text
                      x={8}
                      y={barHeight / 2}
                      textAnchor="start"
                      dominantBaseline="middle"
                      style={{ fontSize: 12 }}
                      fill="#ffffff"
                    >
                      {d.vegetable}
                    </text>
                  ) : (
                    <text
                      x={-8}
                      y={barHeight / 2}
                      textAnchor="end"
                      dominantBaseline="middle"
                      style={{ fontSize: 12 }}
                    >
                      {d.vegetable}
                    </text>
                  )}
                  <text
                    x={w + 6}
                    y={barHeight / 2}
                    textAnchor="start"
                    dominantBaseline="middle"
                    style={{ fontSize: 12 }}
                    fill="currentColor"
                  >
                    ${d.price.toFixed(2)}
                  </text>
                </g>
              )
            })}
            {/* x-axis line */}
            <line
              x1={0}
              y1={-6}
              x2={innerWidth}
              y2={-6}
              stroke="currentColor"
              strokeOpacity="0.2"
            />
            {/* x-axis ticks */}
            {Array.from({ length: 5 }).map((_, i) => {
              const t = (i + 1) / 5
              const v = t * maxPrice
              const x = xScale(v)
              return (
                <g key={i} transform={`translate(${x},0)`}>
                  <line x1={0} y1={-6} x2={0} y2={height} stroke="currentColor" strokeOpacity="0.06" />
                  <text x={0} y={-10} textAnchor="middle" style={{ fontSize: 12 }}>
                    ${v.toFixed(2)}
                  </text>
                </g>
              )
            })}
          </g>
        </svg>
      </div>
      <style>{`
        .chart-section h2 {
          font-size: 1.25rem;
          line-height: 1.2;
        }
      `}</style>
    </section>
  )
}


