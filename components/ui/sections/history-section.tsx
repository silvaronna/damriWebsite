import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HistorySection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Sejarah Singkat</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Perjalanan DAMRI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Kalimat DAMRI yang kita kenal hingga sekarang ini adalah merupakan singkatan dari "Djawatan Angkoetan
                Motor Repoeblik Indonesia" atau secara EYD: Jawatan Angkutan Motor Republik Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                DAMRI sendiri dibentuk berdasarkan maklumat Kementerian Perhubungan RI No.01/DAMRI/46 tanggal 25
                November 1946. Adapun tugas utamanya menyelenggarakan angkutan penumpang dan barang di atas jalan dengan
                menggunakan kendaraan bermotor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan beberapa proses penyempurnaan pertanggungjawaban yang pada akhirnya DAMRI beralih status menjadi
                Perusahaan Umum (Perum). Adapun merujuk berdasarkan Peraturan Pemerintah No. 31 Tahun 1984 serta dengan
                Peraturan Pemerintah No. 31 Tahun 2002.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
