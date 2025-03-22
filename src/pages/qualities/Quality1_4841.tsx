import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4841() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.20" },
    { Element: "Silisyum (Si)", "Oran (%)": "1.50 - 2.50" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "24.0 - 26.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "19.0 - 22.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4841 Paslanmaz Çelik (AISI 314)"
        description="1.4841 kalite paslanmaz çelik, yüksek sıcaklıklarda korozyon ve oksidasyona karşı mükemmel dayanıklılık sunan bir östenitik paslanmaz çelik türüdür. AISI 314 olarak da bilinen bu çelik, yüksek ısı direnci ve dayanıklılığı sayesinde fırın ve ısıtma sistemleri gibi termal uygulamalarda yaygın olarak kullanılır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4841 Paslanmaz Çelik (AISI 314)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4841 Paslanmaz Çelik (AISI 314) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Sıcaklık Dayanımı:</strong> 1.4841, 1150 °C’ye kadar
            oksidasyon direnci sunar, bu nedenle sürekli yüksek sıcaklıklara
            maruz kalan ortamlarda kullanıma uygundur.
          </li>
          <li>
            <strong>Oksidasyon Direnci:</strong> Yüksek krom ve nikel içeriği,
            oksidasyona ve termal şoka karşı direnci artırarak uzun ömürlü
            kullanım sağlar.
          </li>
          <li>
            <strong>Mekanik Dayanım:</strong> Yüksek sıcaklıklarda bile
            mukavemetini korur, bu yüzden zorlu şartlar altında güvenilir bir
            performans sunar.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Isıtma Sistemleri ve Fırınlar:</strong> Yüksek sıcaklıklara
            dayanıklılığı sayesinde endüstriyel fırın ve ısıtıcı ekipmanlarda
            tercih edilir.
          </li>
          <li>
            <strong>Petrokimya Endüstrisi:</strong> Yüksek sıcaklık ve
            oksidasyona dayanıklı olması nedeniyle fırın boruları ve
            reaktörlerde kullanılır.
          </li>
          <li>
            <strong>Cami ve Seramik Üretimi:</strong> Yüksek sıcaklıklara maruz
            kalan cam eritme ve seramik fırınları gibi ortamlarda uzun
            ömürlüdür.
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
            <strong>Çekme Dayanımı:</strong> 550-750 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 220 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> 900 °C ile 1150 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Isı ve Oksidasyon Direnci:</strong> 1150 °C’ye kadar
            dayanıklıdır.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Zorlu termal koşullarda dahi
            yapısal bütünlüğünü korur.
          </li>
          <li>
            <strong>Uzun Ömürlü Performans:</strong> Termal döngülere dayanıklı
            yapısı sayesinde bakım ihtiyacını azaltır.
          </li>
        </ul>
      </div>
    </>
  );
}
