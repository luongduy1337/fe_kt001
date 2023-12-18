import React from 'react'

export default function DetailServicePage({ params }: { params: { slug: string } }) {
  return (
    <div>DetailService For {params.slug}</div>
  )
}
