import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4021() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "0.15 - 0.40" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "12.0 - 14.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4021 Paslanmaz Çelik"
        description="1.4021, ferritik paslanmaz çelik kategorisine giren bir kalite olup, genellikle AISI 420 olarak da adlandırılmaktadır. Orta seviyede karbon içeren bu paslanmaz çelik, yüksek sertlik ve ısıya dayanıklılık özellikleri ile dikkat çeker. 1.4021, kesici aletler, medikal ekipmanlar ve çeşitli endüstriyel uygulamalarda kullanılmak üzere tasarlanmıştır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4021 Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4021 Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> Orta düzeyde korozyon direncine
            sahip olan 1.4021, nemli ortamlara karşı dayanıklıdır, ancak güçlü
            asit ve tuzlu su gibi aşırı korozyon riskine karşı dikkatli
            kullanılmalıdır.
          </li>
          <li>
            <strong>Yüksek Sertlik:</strong> Paslanmaz çeliğin bu türü,
            özellikle sertleştirme işlemleriyle yüksek sertlik kazanabilir. Bu,
            kesici aletler ve bıçaklar için ideal bir seçenek olmasını sağlar.
          </li>
          <li>
            <strong>İyi Mekanik Özellikler:</strong> Sıcaklığa dayanıklılığı ve
            iyi mekanik özellikleri, 1.4021'in çeşitli endüstriyel uygulamalarda
            güvenle kullanılmasını sağlar.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kesici Aletler:</strong> Bıçaklar, makaslar ve diğer kesici
            aletlerde yüksek sertlik ve dayanıklılık sağlamak amacıyla tercih
            edilir.
          </li>
          <li>
            <strong>Medikal Ekipmanlar:</strong> Cerrahi aletler ve diğer
            medikal uygulamalar için hijyenik ve dayanıklı bir seçenek sunar.
          </li>
          <li>
            <strong>Otomotiv ve Makine Sanayi:</strong> Yüksek mekanik dayanım
            gerektiren parçalar ve bileşenlerde kullanılır.
          </li>
          <li>
            <strong>Yapısal Uygulamalar:</strong> Düşük korozyon riski olan
            ortamlarda, yapısal bileşenlerde güvenilir bir malzeme olarak tercih
            edilebilir.
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Teknik Özellikler</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yoğunluk:</strong> 7.8 g/cm³
          </li>
          <li>
            <strong>Çekme Dayanımı:</strong> 500-700 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 300 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -40 °C ile 600 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Sertlik:</strong> Kesici aletler ve endüstriyel
            uygulamalar için gereken yüksek sertliği sağlar.
          </li>
          <li>
            <strong>Ekonomik Seçenek:</strong> Orta düzeyde korozyon direnci ile
            maliyet etkin bir paslanmaz çelik çözümüdür.
          </li>
          <li>
            <strong>İyi İşlenebilirlik:</strong> Yüksek sıcaklıklarda dayanıklı
            olduğu için çeşitli işleme tekniklerine uygundur.
          </li>
        </ul>
      </div>
    </>
  );
}
