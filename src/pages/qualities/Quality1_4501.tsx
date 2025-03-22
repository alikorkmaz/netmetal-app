import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4501() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.03" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.030" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.010" },
    { Element: "Krom (Cr)", "Oran (%)": "24.0 - 26.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "6.0 - 8.0" },
    { Element: "Molibden (Mo)", "Oran (%)": "4.0 - 5.0" },
    { Element: "Azot (N)", "Oran (%)": "0.20 - 0.30" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4501 Paslanmaz Çelik"
        description="1.4501, yüksek molibden içeriğiyle bilinen östenitik paslanmaz çelik türüdür. Genellikle AISI 254SMo olarak adlandırılan bu kalite, üstün korozyon direnci ve mekanik özellikleri sayesinde denizcilik, kimya ve petrokimya endüstrilerinde zorlu ortamlara dayanıklılık gösterir. Özellikle, klorür içeren ortamlara karşı mükemmel bir direnç sunarak kritik uygulamalarda güvenilir bir seçenek haline gelir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4501 Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4501 Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4501, içeriğindeki yüksek
            molibden ve krom sayesinde, özellikle deniz suyu ve asidik
            ortamlarda mükemmel korozyon dayanımı sunar. Çukurlaşma ve çatlak
            korozyonu gibi sorunlara karşı dayanıklıdır.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Paslanmaz çeliğin bu türü, yüksek
            mekanik dayanımı sayesinde kalınlıkları azaltarak daha hafif ve
            dayanıklı yapılar oluşturulmasına olanak tanır.
          </li>
          <li>
            <strong>Sıcaklık Dayanımı:</strong> 1.4501, yüksek sıcaklıklara
            karşı da dayanıklıdır. Yapısal bütünlüğünü koruyarak aşırı ısılarda
            güvenli bir şekilde kullanılabilir.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kimya ve Petrokimya Endüstrisi:</strong> Asidik ve korozif
            ortamlarda boru hatları, reaktörler ve depolama tankları gibi
            ekipmanlarda güvenle kullanılır.
          </li>
          <li>
            <strong>Denizcilik ve Gemi İnşası:</strong> Tuzlu suya karşı
            mükemmel dayanıklılığı sayesinde gemi yapımında ve deniz
            ekipmanlarında tercih edilir.
          </li>
          <li>
            <strong>Gıda İşleme:</strong> Gıda ile temas eden uygulamalarda
            hijyenik özellikleri ve korozyon direnci sayesinde güvenle
            kullanılabilir.
          </li>
          <li>
            <strong>Enerji Üretimi:</strong> Özellikle ısıl enerji
            santrallerinde, boru hatları ve ısı değiştiricilerde yüksek sıcaklık
            ve korozyon direnci gerektiren uygulamalarda tercih edilir.
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
            <strong>Çekme Dayanımı:</strong> 650-850 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 450 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -50 °C ile 300 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Üstün Korozyon Direnci:</strong> Deniz suyu ve asidik
            ortamlar gibi zorlu koşullarda uzun ömürlü performans sunar.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> İnce yapıların kullanılmasına
            olanak tanır ve hafif ama dayanıklı yapılar oluşturur.
          </li>
          <li>
            <strong>Isı Dayanıklılığı:</strong> Yüksek sıcaklıklara karşı
            dayanıklılığı, endüstriyel uygulamalarda güvenilir bir seçenek
            olmasını sağlar.
          </li>
        </ul>
      </div>
    </>
  );
}
