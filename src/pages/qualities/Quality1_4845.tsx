import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4845() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.08" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.50" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "24.0 - 26.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "19.0 - 22.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4845 Paslanmaz Çelik (AISI 310S)"
        description="1.4845 kalite paslanmaz çelik, yüksek ısı ve oksidasyon direncine sahip bir östenitik paslanmaz çelik türüdür. AISI 310S olarak da bilinen bu çelik, özellikle yüksek sıcaklıklara dayanıklılığı ve düşük karbon içeriği ile ön plana çıkar. 1.4845, sürekli yüksek sıcaklıklara maruz kalan ortamlarda uzun ömürlü ve güvenilir bir çözümdür."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4845 Paslanmaz Çelik (AISI 310S)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4845 Paslanmaz Çelik (AISI 310S) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Sıcaklık Dayanımı:</strong> 1.4845, 1050 °C’ye kadar
            olan sıcaklıklarda yapısal bütünlüğünü korur ve deformasyona karşı
            direnç gösterir.
          </li>
          <li>
            <strong>Oksidasyon ve Korozyon Direnci:</strong> Yüksek krom ve
            nikel oranı sayesinde, yüksek sıcaklıklarda oksidasyona karşı
            oldukça dayanıklıdır.
          </li>
          <li>
            <strong>Düşük Karbon İçeriği:</strong> Düşük karbon miktarı,
            özellikle kaynak sonrası korozyon riskini azaltır ve
            kaynaklanabilirliği artırır.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Petrokimya ve Rafineri Sistemleri:</strong> Yüksek
            sıcaklıklarda çalışan fırın boruları, reaktörler ve diğer petrokimya
            ekipmanlarında yaygın olarak kullanılır.
          </li>
          <li>
            <strong>Isıtma ve Fırın Ekipmanları:</strong> Yüksek ısı direnci,
            endüstriyel ısıtma sistemlerinde ve fırınlarda kullanımını ideal
            kılar.
          </li>
          <li>
            <strong>Kimya Endüstrisi:</strong> Korozyona ve oksidasyona karşı
            yüksek direnci sayesinde, aşındırıcı kimyasallarla temas eden
            ekipmanlarda tercih edilir.
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
            <strong>Çekme Dayanımı:</strong> 520-720 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 205 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> 900 °C ile 1050 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Oksidasyon ve Korozyon Direnci:</strong> 1050 °C’ye
            kadar yüksek sıcaklıklarda güvenilir performans sunar.
          </li>
          <li>
            <strong>Düşük Karbon İçeriği:</strong> Kaynak sonrası korozyona
            karşı direnci artırır.
          </li>
          <li>
            <strong>Uzun Ömürlü ve Güvenilir:</strong> Yüksek sıcaklıklarda
            kullanım ömrünü uzatır ve bakım ihtiyacını en aza indirir.
          </li>
        </ul>
      </div>
    </>
  );
}
