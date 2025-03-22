import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4028() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "0.30 - 0.40" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "12.0 - 14.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4028 Paslanmaz Çelik"
        description="1.4028, ferritik paslanmaz çelik grubuna ait bir kalite olup, genellikle AISI 420F olarak bilinir. Bu paslanmaz çelik türü, özellikle yüksek sertlik ve aşınma direnci gerektiren uygulamalarda kullanılır. 1.4028, düşük karbon içeriği sayesinde kolayca işlenebilir ve kaynaklanabilir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4028 Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4028 Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4028, ferritik yapısından
            dolayı orta düzeyde korozyon direncine sahiptir. Nemli ortamlara
            karşı direnç gösterirken, asidik ve tuzlu ortamlarda dikkatli
            kullanım gerektirir.
          </li>
          <li>
            <strong>Yüksek Sertlik:</strong> Paslanmaz çeliğin bu türü,
            özellikle sertleştirme işlemleri ile yüksek sertlik kazanır. Bu
            özellik, kesici aletler ve bıçaklar için ideal hale getirir.
          </li>
          <li>
            <strong>İyi İşlenebilirlik:</strong> Düşük karbon içeriği sayesinde
            işlenmesi ve kaynaklanması kolaydır. Bu, üretim süreçlerini
            hızlandırır ve maliyetleri düşürür.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kesici Aletler:</strong> Bıçaklar, makaslar ve diğer kesici
            aletlerde yüksek sertlik ve dayanıklılık sağlamak amacıyla sıklıkla
            tercih edilir.
          </li>
          <li>
            <strong>Medikal Ekipmanlar:</strong> Cerrahi aletler ve diğer
            medikal uygulamalar için güvenilir ve hijyenik bir seçenek sunar.
          </li>
          <li>
            <strong>Otomotiv ve Makine Sanayi:</strong> Düşük korozyon riski
            olan parçalar ve bileşenlerde kullanılmaktadır.
          </li>
          <li>
            <strong>Endüstriyel Uygulamalar:</strong> Yüksek sertlik gerektiren
            çeşitli endüstriyel uygulamalarda güvenle kullanılabilir.
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
            <strong>Çekme Dayanımı:</strong> 500-750 MPa
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
            <strong>Ekonomik Seçenek:</strong> Düşük maliyetli bir çözüm sunar,
            özellikle büyük ölçekli uygulamalarda ekonomik avantaj sağlar.
          </li>
          <li>
            <strong>Kolay İşlenebilirlik:</strong> Düşük karbon içeriği
            sayesinde işlenmesi kolaydır, bu da üretim süreçlerini hızlandırır.
          </li>
        </ul>
      </div>
    </>
  );
}
