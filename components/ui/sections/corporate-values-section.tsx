import { corporateValues } from "../data/corporate-values"
import { CorporateValueCard } from "../cards/corporate-value-card"

export function CorporateValuesSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Perusahaan Umum Damri Corporate Values</h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Kami hadir untuk memberikan sumbangsih terbaik bagi negeri dengan mengutamakan profesionalisme, integritas
          serta bersinergi dalam mewujudkan Indonesia yang lebih baik di masa depan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {corporateValues.map((value, index) => (
          <CorporateValueCard key={index} value={value} />
        ))}
      </div>
    </section>
  )
}
