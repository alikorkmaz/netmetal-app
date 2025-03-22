import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4541() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.08" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "17.0 - 19.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "9.0 - 12.0" },
    { Element: "Titanyum (Ti)", "Oran (%)": "%5 x C - %0.70 (min.)" },
    { Element: "Azot (N)", "Oran (%)": "≤ 0.11" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4541 Paslanmaz Çelik (AISI 321)"
        description="1.4541 paslanmaz çelik, içeriğinde titanyum bulunan ve yüksek sıcaklıklarda kararlı kalan bir östenitik paslanmaz çelik türüdür. AISI 321 olarak da bilinen bu kalite, yüksek sıcaklıklarda kaynak sonrası korozyona karşı dayanıklılığıyla öne çıkar. Özellikle oksidasyon ve aşınma direnci gerektiren zorlu uygulamalarda tercih edilir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4541 Paslanmaz Çelik (AISI 321)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4541 Paslanmaz Çelik (AISI 321) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4541, titanyum ilavesi
            sayesinde özellikle yüksek sıcaklıklarda intergranüler korozyona
            karşı dayanıklıdır. Bu özelliği ile 450-850 °C aralığındaki
            ortamlarda güvenle kullanılabilir.
          </li>
          <li>
            <strong>Yüksek Sıcaklık Dayanımı:</strong> Titanyum katkısı, bu
            paslanmaz çeliği 800 °C'ye kadar olan sıcaklıklarda kararlı tutar,
            böylece sıcaklık dalgalanmalarına karşı yapısal dayanıklılık sağlar.
          </li>
          <li>
            <strong>Kaynaklanabilirlik:</strong> İçerdiği titanyum, karbon
            çökmesini engeller ve kaynak sonrası korozyon çatlaklarını minimuma
            indirir, bu da kaynak işlemleri için avantaj sağlar.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Petrokimya ve Kimya Endüstrisi:</strong> Yüksek
            sıcaklıklarda kimyasallara karşı direnci, boru hatları, tanklar ve
            reaktörlerde kullanımını ideal kılar.
          </li>
          <li>
            <strong>Havacılık ve Uzay Sektörü:</strong> Yüksek sıcaklıklarda
            yapısal bütünlüğünü koruduğu için motor bileşenleri ve uçak
            parçalarında kullanılır.
          </li>
          <li>
            <strong>Isıtma ve Enerji Sistemleri:</strong> Yüksek sıcaklıklara
            dayanımı sayesinde kazanlar, ısı değiştiriciler ve buhar hatları
            gibi sistemlerde tercih edilir.
          </li>
          <li>
            <strong>Gıda İşleme:</strong> Gıdaya temas eden parçalar için
            güvenli ve hijyenik bir seçenektir, bu yüzden gıda işleme
            ekipmanlarında da kullanılır.
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
            <strong>Çalışma Sıcaklığı:</strong> 450 °C ile 800 °C arası
            idealdir.
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Intergranüler Korozyona Dayanıklılık:</strong> Özellikle
            kaynak işlemleri sonrasında yüksek sıcaklıklarda oluşabilecek
            korozyona karşı dayanıklıdır.
          </li>
          <li>
            <strong>Yüksek Sıcaklık Kararlılığı:</strong> 800 °C’ye kadar
            sıcaklık dalgalanmalarına direnç gösterir.
          </li>
          <li>
            <strong>Uzun Ömürlü Performans:</strong> Sert koşullarda dahi uzun
            ömürlüdür, bu da bakım maliyetlerini düşürür.
          </li>
        </ul>
      </div>
    </>
  );
}
