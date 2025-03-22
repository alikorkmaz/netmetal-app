import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4034() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "0.95 - 1.20" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "16.0 - 18.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4034 Paslanmaz Çelik"
        description="1.4034, ferritik ve martensitik paslanmaz çelik arasında yer alan bir kalite olup, genellikle AISI 440B olarak adlandırılmaktadır. Orta düzeyde karbon içeriği ile dikkat çeken bu paslanmaz çelik, yüksek sertlik ve korozyon direnci ile bilinir. 1.4034, özellikle kesici aletler, medikal ekipmanlar ve çeşitli endüstriyel uygulamalarda tercih edilir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4034 Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4034 Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4034, ferritik yapısından
            dolayı orta düzeyde korozyon direncine sahiptir. Su ve nemli
            ortamlara karşı direnç gösterirken, güçlü asitler ve tuzlu
            ortamlarda dikkatli kullanılmalıdır.
          </li>
          <li>
            <strong>Yüksek Sertlik:</strong> Paslanmaz çeliğin bu türü,
            sertleştirme işlemleri ile yüksek sertlik kazanarak, kesici aletler
            ve bıçaklar için ideal bir malzeme haline gelir.
          </li>
          <li>
            <strong>Mekanik Özellikler:</strong> İyi mekanik özelliklere sahip
            olan 1.4034, yüksek sıcaklıklarda da dayanıklılık gösterir ve
            çeşitli endüstriyel uygulamalara uygundur.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kesici Aletler:</strong> Bıçaklar, makaslar ve diğer kesici
            aletlerde yüksek sertlik ve dayanıklılık sağlamak için yaygın olarak
            kullanılır.
          </li>
          <li>
            <strong>Medikal Ekipmanlar:</strong> Cerrahi aletler ve diğer
            medikal uygulamalarda hijyenik özellikleri ve dayanıklılığı
            nedeniyle tercih edilir.
          </li>
          <li>
            <strong>Otomotiv ve Makine Sanayi:</strong> Parçaların ve
            bileşenlerin yüksek mekanik dayanım gerektiren uygulamalarda
            kullanılır.
          </li>
          <li>
            <strong>Yapısal Uygulamalar:</strong> Düşük korozyon riski olan
            yapısal bileşenlerde güvenilir bir malzeme olarak tercih edilir.
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
            <strong>Çekme Dayanımı:</strong> 600-800 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 400 MPa
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
            <strong>İyi Mekanik Özellikler:</strong> Yüksek sıcaklıklarda dahi
            fiziksel özelliklerini korur.
          </li>
          <li>
            <strong>Ekonomik Seçenek:</strong> Orta düzeyde korozyon direnci ile
            maliyet etkin bir paslanmaz çelik çözümüdür.
          </li>
        </ul>
      </div>
    </>
  );
}
