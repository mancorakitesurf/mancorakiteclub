import StandardPage from './StandardPage.jsx'

function StayPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Stay with us"
      subtitle="Comfortable rooms close to every session."
      description="Accommodation options for your Máncora stay."
      canonicalPath="/stay"
      hreflang={{ en: '/stay', es: '/esp', default: '/' }}
    />
  )
}

export default StayPage
