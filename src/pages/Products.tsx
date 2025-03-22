import AppBreadcrumb from "../components/AppBreadcrumb";
import AppTable from "../components/AppTable";

export function Products() {
  const sections = [
    {
      title: "Yuvarlak Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Yuvarlak",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Çap", Metric: "3mm - 32mm", Inch: '0.197" - 1.250"' },
          ],
          note: "h8 /h9 / h10 – EN 10278 / ASTM A484",
        },
        {
          title: "Taşlanmış Yuvarlak",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Çap", Metric: "3mm - 200mm", Inch: '0.197" - 8.000"' },
          ],
          note: "h8 /h9 / h10 – EN 10278 / ASTM A484",
        },
        {
          title: "Sıcak Haddelenmiş Yuvarlak",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Çap", Metric: "20mm – 150mm", Inch: '0.625" - 7.000"' },
          ],
          note: "k12 /k13 – EN 10060 / ASTM A484 hot-rolled round",
        },
        {
          title: "Dövme Yuvarlak",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Çap", Metric: "150mm – 750mm", Inch: '7.000" - 23.000"' },
          ],
          note: "ASTM A484 - EN20286 (k12 - k13) - EN10031",
        },
      ],
      additionalNote:
        "*** Stoğumuzda bulunan yuvarlak çubuklardan 20mm – 500mm arası çubuklarda min. 20mm boy olmak üzere istenilen adette ve hızlı teslimatla çözüm sunabilmekteyiz.",
    },
    {
      title: "Lama Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Lama",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Genişlik", Metric: "12 mm - 200 mm", Inch: '1/2" - 8"' },
            { Özellik: "Kalınlık", Metric: "3 mm - 80 mm", Inch: '1/8" - 3"' },
            { Özellik: "Uzunluk", Metric: "3 m - 3,2 m", Inch: "11 ft - 14 ft" },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
        {
          title: "Sıcak Haddelenmiş Lama",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Genişlik", Metric: "12 mm - 200 mm", Inch: '1/2" - 8"' },
            { Özellik: "Kalınlık", Metric: "3 mm - 80 mm", Inch: '1/8" - 3"' },
            { Özellik: "Uzunluk", Metric: "4 m – 6,5 m", Inch: "11 ft - 14 ft" },
          ],
          note: "EN 10058/ASTM A-484",
        },
        {
          title: "Dövme Lama",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Genişlik", Metric: "150mm – 750mm", Inch: "" },
            { Özellik: "Kalınlık", Metric: "150mm – 750mm", Inch: "" },
            { Özellik: "Uzunluk", Metric: "4 m – 6,5 m", Inch: "" },
          ],
          note: "EN 10204/3.1 sertifikası ile birlikte - %100 Avrupa menşeili",
        },
        {
          title: "Özel Ölçü Kesim",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Genişlik", Metric: "10mm – 500mm", Inch: "" },
            { Özellik: "Kalınlık", Metric: "10mm – 500mm", Inch: "" },
            { Özellik: "Uzunluk", Metric: "50mm – 5 m", Inch: "" },
          ],
          note: "EN 10204/3.1 sertifikalı %100 Avrupa menşeili bloklardan istenilen ölçüde aynı gün teslim ile özel kesim kabiliyetine sahibiz.",
        },
      ],
    },
    {
      title: "Altıköşe Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Altıköşe",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Ölçü", Metric: "8 mm - 100 mm", Inch: '3/8" - 4"' },
            { Özellik: "Uzunluk", Metric: "3 m - 3,2 m", Inch: "11 ft - 14 ft" },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
      ],
    },
    {
      title: "Kare Kesit",
      data: [
        {
          title: "Soğuk Çekilmiş Kare",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Ölçü", Metric: "8 mm - 100 mm", Inch: '3/8" - 4"' },
            { Özellik: "Uzunluk", Metric: "3 m - 3,2 m", Inch: "11 ft - 14 ft" },
          ],
          note: "EN 10278/Tolerance h11/ASTM A-484",
        },
        {
          title: "Sıcak Haddelenmiş Kare",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Ölçü", Metric: "10 mm - 100 mm", Inch: '1/2" - 4"' },
            { Özellik: "Uzunluk", Metric: "4 m – 6,5 m", Inch: "11 ft - 14 ft" },
          ],
          note: "EN 10059/ASTM A-484",
        },
        {
          title: "Dövme Kare",
          headers: ["Özellik", "Metric", "Inch"],
          rows: [
            { Özellik: "Ölçü", Metric: "150mm – 750mm", Inch: "" },
            { Özellik: "Uzunluk", Metric: "4 m – 6,5 m", Inch: "" },
          ],
          note: "EN 10204/3.1 sertifikası ile birlikte - %100 Avrupa menşeili",
        },
      ],
      additionalNote:
        "*** Stoğumuzda bulunan EN 10204/3.1 sertifikalı %100 Avrupa menşeili bloklardan istenilen ölçüde aynı gün teslim ile özel kesim kabiliyetine sahibiz.",
    },
  ];

  return (
    <>
      <AppBreadcrumb
        title="Ürünler"
        description="Geniş ürün yelpazemiz ile yüksek kaliteli malzemeleri uygun fiyatlarla sunuyoruz. İhtiyaçlarınıza özel çözümlerle güvenilir ve sürdürülebilir tedarik anlayışını benimsiyoruz."
        breadcrumbItems={[{ label: "Ürünler" }]}
      />
      <div>
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="mb-4 text-2xl font-bold">{section.title}</h1>
            {section.data.map((item, itemIndex) => (
              <AppTable
                key={itemIndex}
                title={item.title}
                headers={item.headers}
                rows={item.rows}
                note={item.note}
              />
            ))}
            {section.additionalNote && (
              <p className="mt-2 text-sm">{section.additionalNote}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
