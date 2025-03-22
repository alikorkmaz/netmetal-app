import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4542() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.07" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "15.0 - 17.5" },
    { Element: "Nikel (Ni)", "Oran (%)": "3.0 - 5.0" },
    { Element: "Bakır (Cu)", "Oran (%)": "3.0 - 5.0" },
    { Element: "Niyobyum (Nb)", "Oran (%)": "0.15 - 0.45" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4542 Paslanmaz Çelik (AISI 630 / 17-4PH)"
        description="1.4542 kalite paslanmaz çelik, hem yüksek mukavemet hem de korozyon direnci gerektiren uygulamalar için geliştirilmiş, martenzitik ve östenitik özellikler gösteren bir çelik türüdür. 17-4PH veya AISI 630 olarak da bilinen bu kalite, çökelme sertleşmesi özelliğiyle ön plana çıkar ve yüksek mekanik dayanım gerektiren birçok endüstriyel uygulamada güvenle kullanılır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4542 Paslanmaz Çelik (AISI 630 / 17-4PH)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4542 Paslanmaz Çelik (AISI 630 / 17-4PH) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4542, aşındırıcı ortamlara
            karşı iyi bir koruma sağlar ve birçok endüstriyel kimyasala
            dayanıklıdır.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Çökelme sertleşmesi
            (precipitation hardening) işlemiyle sertleştirilerek oldukça yüksek
            mukavemet değerlerine ulaşır. Özellikle yüksek dayanıklılık
            gerektiren uygulamalarda idealdir.
          </li>
          <li>
            <strong>Isı Dayanımı:</strong> 1.4542, orta seviyede sıcaklıklarda
            mukavemetini korur ve yaklaşık 315 °C’ye kadar dayanıklılık
            gösterir.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Havacılık ve Uzay Endüstrisi:</strong> Yüksek mukavemeti ve
            korozyon direnci sayesinde uçak parçaları, iniş takımları ve yapısal
            bileşenlerde kullanılır.
          </li>
          <li>
            <strong>Enerji ve Petrokimya Sektörleri:</strong> Basınçlı kaplar,
            valfler ve vanalar gibi yüksek basınç dayanımı gerektiren
            uygulamalarda tercih edilir.
          </li>
          <li>
            <strong>Savunma Sanayi:</strong> Silah bileşenleri, denizaltı
            parçaları ve askeri ekipmanlarda kullanılır.
          </li>
          <li>
            <strong>Gıda İşleme:</strong> Hijyen gereksinimlerine uygun yapısı
            ve korozyon direnci sayesinde gıda işleme ekipmanlarında güvenle
            kullanılır.
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
            <strong>Çekme Dayanımı:</strong> 930-1100 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 725 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -29 °C ile 315 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Mukavemet ve Dayanıklılık:</strong> Çökelme
            sertleşmesi sayesinde yüksek dayanım ve sertlik sunar.
          </li>
          <li>
            <strong>Çeşitli Ortamlarda Korozyon Direnci:</strong> Aşındırıcı
            çevre koşullarında dayanıklıdır, uzun ömürlü performans sağlar.
          </li>
          <li>
            <strong>Isıl İşlem Kolaylığı:</strong> Isıl işlemle mukavemeti
            artırılabilir, bu da çeşitli ihtiyaçlara göre ayarlanabilir sertlik
            sağlar.
          </li>
        </ul>
      </div>
    </>
  );
}
