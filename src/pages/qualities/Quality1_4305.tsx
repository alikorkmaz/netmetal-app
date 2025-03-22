import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4305() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.15" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "0.15 - 0.35" },
    { Element: "Krom (Cr)", "Oran (%)": "17.0 - 19.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "8.0 - 10.0" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4305 Paslanmaz Çelik (AISI 303)"
        description="1.4305 paslanmaz çelik, özellikle işlenebilirliğe öncelik verilen uygulamalar için geliştirilmiş, yüksek sülfür içeriğine sahip bir östenitik paslanmaz çelik türüdür. AISI 303 olarak da bilinen bu kalite, işlenmesi en kolay paslanmaz çeliklerden biridir ve tornalama, frezeleme gibi yüksek hassasiyet gerektiren işlerde tercih edilir."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4305 Paslanmaz Çelik (AISI 303)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4305 Paslanmaz Çelik (AISI 303) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>İşlenebilirlik:</strong> İçeriğindeki yüksek sülfür oranı
            sayesinde 1.4305 paslanmaz çelik, mükemmel işlenebilirlik sağlar ve
            hassas parça üretiminde yüksek performans gösterir.
          </li>
          <li>
            <strong>Korozyon Direnci:</strong> Diğer östenitik çelikler kadar
            yüksek olmasa da, orta dereceli korozyon direncine sahiptir. Yağlı
            ve kuru ortamlarda dayanıklıdır ancak aşındırıcı kimyasallardan
            korunmalıdır.
          </li>
          <li>
            <strong>Parlatılabilirlik ve Yüzey İşleme:</strong>{" "}
            Parlatılabilirliği sınırlıdır, bu nedenle dekoratif uygulamalarda
            nadiren kullanılır. Ancak işlenmiş yüzey kalitesi genellikle
            yüksektir.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Otomotiv Parçaları:</strong> Civatalar, somunlar, mil ve
            bağlantı elemanları gibi hassas işlenmiş otomotiv parçaları için
            idealdir.
          </li>
          <li>
            <strong>Makine ve Ekipman Bileşenleri:</strong> 1.4305, kolay
            işlenebilirliği sayesinde vida, dişli ve bağlantı parçaları gibi
            küçük ama kritik öneme sahip makine bileşenlerinde tercih edilir.
          </li>
          <li>
            <strong>Elektrik Ekipmanları:</strong> Yüksek işlenebilirliği,
            elektrik ekipmanları ve kontak parçalarında kullanımını sağlar.
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
            <strong>Akma Dayanımı:</strong> ≥ 190 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> 870 °C'ye kadar
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Düşük aşınma ve talaş kırma:</strong> Üretim sürecinde düşük
            maliyet ve verimlilik sağlar.
          </li>
          <li>
            <strong>Hassas işleme:</strong> Üretim sürecini hızlandırır.
          </li>
          <li>
            <strong>Ekonomik maliyet:</strong> Hızlı üretim süreci sunar.
          </li>
        </ul>
      </div>
    </>
  );
}
