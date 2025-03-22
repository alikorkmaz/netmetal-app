import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4571() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.08" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "16.5 - 18.5" },
    { Element: "Nikel (Ni)", "Oran (%)": "10.5 - 13.5" },
    { Element: "Molibden (Mo)", "Oran (%)": "2.0 - 2.5" },
    { Element: "Titanyum (Ti)", "Oran (%)": "%5 x C - %0.70 (min.)" },
    { Element: "Azot (N)", "Oran (%)": "≤ 0.11" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4571 Paslanmaz Çelik (AISI 316Ti)"
        description="1.4571 kalite paslanmaz çelik, molibden ve titanyum katkısıyla yüksek korozyon direncine ve dayanıklılığa sahip bir östenitik paslanmaz çeliktir. AISI 316Ti olarak da bilinen bu çelik, agresif kimyasallar ve deniz ortamı gibi zorlu koşullarda uzun ömürlü performans gösterir. Kimya, petrokimya ve denizcilik sektörlerinde güvenle kullanılır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4571 Paslanmaz Çelik (AISI 316Ti)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4571 Paslanmaz Çelik (AISI 316Ti) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> Molibden içeriği sayesinde
            klorür, asit ve tuzlu su ortamlarına karşı mükemmel korozyon direnci
            sunar, bu nedenle özellikle aşındırıcı çevrelerde tercih edilir.
          </li>
          <li>
            <strong>Isı Dayanımı:</strong> Titanyum stabilizasyonu sayesinde
            1.4571, 800 °C’ye kadar yüksek sıcaklıklarda yapısal kararlılığını
            korur. Sıcaklık dalgalanmalarının olduğu ortamlar için idealdir.
          </li>
          <li>
            <strong>Kaynaklanabilirlik:</strong> Titanyum sayesinde karbon
            çökmesi önlenir, böylece kaynak sonrası korozyon çatlaklarına karşı
            dayanıklıdır ve kaynak işlemlerinde çatlama riskini azaltır.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kimya ve Petrokimya Endüstrisi:</strong> Yüksek sıcaklık ve
            agresif kimyasal ortamlarda boru hatları, depolama tankları ve
            reaktörlerde kullanılır.
          </li>
          <li>
            <strong>Denizcilik ve Gemi İnşası:</strong> Tuzlu su ve nemli
            ortamlarda uzun süreli dayanıklılık gösterdiği için gemi parçaları
            ve denizcilik ekipmanları için güvenilir bir tercihtir.
          </li>
          <li>
            <strong>Enerji ve Isıtma Sistemleri:</strong> Yüksek sıcaklıklara
            dayanıklı yapısıyla kazanlar, ısı değiştiriciler ve buhar
            sistemlerinde kullanılır.
          </li>
          <li>
            <strong>Gıda ve İlaç Sanayi:</strong> Hijyenik yapısı ve korozyona
            dayanıklılığı sayesinde gıda işleme ve ilaç üretim ekipmanlarında
            kullanılır.
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
            <strong>Akma Dayanımı:</strong> ≥ 200 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -200 °C ile 800 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Korozyon Direnci:</strong> Özellikle tuzlu su, klorür
            ve asidik ortamlarda uzun ömürlü performans sunar.
          </li>
          <li>
            <strong>Yüksek Sıcaklık Kararlılığı:</strong> 800 °C’ye kadar
            yapısal bütünlüğünü korur.
          </li>
          <li>
            <strong>Uzun Ömürlü ve Düşük Bakım Maliyeti:</strong> Zorlu
            koşullarda uzun ömürlü kullanım sağladığından bakım ihtiyaçlarını en
            aza indirir.
          </li>
        </ul>
      </div>
    </>
  );
}
