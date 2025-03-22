import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality13_8PH() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.05" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 0.10" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 0.10" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "12.25 - 13.25" },
    { Element: "Nikel (Ni)", "Oran (%)": "7.5 - 8.5" },
    { Element: "Molibden (Mo)", "Oran (%)": "2.0 - 2.5" },
    { Element: "Alüminyum (Al)", "Oran (%)": "0.9 - 1.35" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="13-8 PH Paslanmaz Çelik"
        description="13-8 PH paslanmaz çelik, yüksek mukavemet, korozyon direnci ve çatlama dayanımı ile öne çıkan, martenzitik yapıya sahip çökelme sertleşmeli bir paslanmaz çelik kalitesidir. Gelişmiş mekanik özellikleri ve yüksek yorulma dayanımı sayesinde zorlu endüstriyel uygulamalarda tercih edilir. Özellikle havacılık ve savunma sektörlerinde yüksek performans gerektiren uygulamalar için idealdir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "13-8 PH Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          13-8 PH Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 13-8 PH, nemli ve aşındırıcı
            ortamlara karşı iyi bir koruma sağlar, böylece denizcilik ve
            havacılık gibi yüksek korozyon riski taşıyan alanlarda güvenle
            kullanılır.
          </li>
          <li>
            <strong>Yüksek Mukavemet ve Sertlik:</strong> Çökelme sertleşmesi
            sayesinde mükemmel bir dayanım sunar. Bu özelliği sayesinde yüksek
            yüklere dayanması gereken bileşenlerde tercih edilir.
          </li>
          <li>
            <strong>Çatlama ve Yorulma Direnci:</strong> 13-8 PH, çatlama ve
            yorulmaya karşı dirençlidir. Özellikle zorlu mekanik koşullarda,
            sürekli titreşime maruz kalan parçalarda uzun ömürlüdür.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Havacılık ve Uzay Endüstrisi:</strong> İniş takımları,
            yapısal bileşenler ve yüksek mukavemet gerektiren uçak parçalarında
            kullanılır.
          </li>
          <li>
            <strong>Savunma Sanayi:</strong> Silah bileşenleri, denizaltı
            parçaları ve askeri ekipmanlarda yüksek dayanıklılık sunar.
          </li>
          <li>
            <strong>Petrokimya Sektörü:</strong> Basınçlı kaplar, pompa
            bileşenleri ve vanalar gibi yüksek basınca dayanıklı parçalarda
            tercih edilir.
          </li>
          <li>
            <strong>Medikal ve Gıda Sanayi:</strong> Hijyenik yapısı ve korozyon
            dayanımı sayesinde tıbbi cihazlar ve gıda işleme makinelerinde
            güvenle kullanılır.
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
            <strong>Çekme Dayanımı:</strong> 1150-1350 MPa (ısıl işleme bağlı
            olarak)
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 1030 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -50 °C ile 315 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Mukavemet:</strong> Aşırı yüklere dayanıklıdır ve
            uzun ömürlü bir çözüm sunar.
          </li>
          <li>
            <strong>İyi Korozyon Dayanımı:</strong> Deniz suyu, kimyasal
            ortamlara karşı direnç gösterir.
          </li>
          <li>
            <strong>Çatlama ve Yorulma Direnci:</strong> Çatlama ve yorulmaya
            karşı dayanıklılığı sayesinde ağır yük altında dahi güvenilir
            performans sağlar.
          </li>
        </ul>
      </div>
    </>
  );
}
