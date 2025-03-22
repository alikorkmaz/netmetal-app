import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4307() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.03" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "17.5 - 19.5" },
    { Element: "Nikel (Ni)", "Oran (%)": "8.0 - 10.5" },
    { Element: "Azot (N)", "Oran (%)": "≤ 0.11" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4307 Paslanmaz Çelik (AISI 304L)"
        description="1.4307 paslanmaz çelik, düşük karbon içeriği sayesinde üstün korozyon direncine sahip olan bir çelik türüdür. Çoğunlukla 304L olarak da bilinen bu kalite, kolay işlenebilirliği ve kaynaklanabilirliği ile endüstriyel uygulamalarda tercih edilmektedir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4307 Paslanmaz Çelik (AISI 304L)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4307 Paslanmaz Çelik (AISI 304L) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4307 paslanmaz çelik, düşük
            karbon oranı ile korozyona karşı daha dayanıklıdır ve özellikle klor
            içerikli ortamlarda paslanmaya karşı direnç gösterir.
          </li>
          <li>
            <strong>Kaynaklanabilirlik:</strong> 1.4307’nin düşük karbon içeriği
            kaynak sırasında karbon çökmesini önler ve böylece kaynak sonrası
            korozyon direncini artırır.
          </li>
          <li>
            <strong>Yüzey İşleme ve Parlaklık:</strong> Estetik yüzey işlemleri
            için uygun olan 1.4307, yüksek parlaklıkta son kat yüzeyler için
            ideal bir seçimdir.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Gıda ve İçecek Endüstrisi:</strong> Korozyon direnci
            sayesinde 1.4307, gıda işleme ekipmanlarında hijyen standartlarına
            uyum sağlar.
          </li>
          <li>
            <strong>Kimya ve İlaç Sektörü:</strong> Kimyasal dayanıklılığı ile
            reaktörler, karıştırıcılar ve boru hatlarında tercih edilir.
          </li>
          <li>
            <strong>Mutfak Ekipmanları:</strong> Hijyenik yapısı ve estetik
            görünümüyle mutfak tezgahları, evyeler ve diğer mutfak
            donanımlarında kullanılır.
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Teknik Özellikler</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yoğunluk:</strong> 7.9 g/cm³
          </li>
          <li>
            <strong>Çekme Dayanımı:</strong> 500-700 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 190 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> 870 °C'ye kadar olan
            sıcaklıklarda performans gösterir
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Düşük karbon içeriği:</strong> Kaynak sonrası korozyona
            dirençli olması.
          </li>
          <li>
            <strong>Çeşitli yüzey işlemlerine uygunluğu:</strong> Estetik
            parlaklık sağlaması.
          </li>
          <li>
            <strong>İşlenebilirliğinin kolay olması:</strong> Geniş bir uygulama
            alanına sahip olması.
          </li>
        </ul>
      </div>
    </>
  );
}
