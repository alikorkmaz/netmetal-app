import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality15_5PH() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.07" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "14.0 - 15.5" },
    { Element: "Nikel (Ni)", "Oran (%)": "3.5 - 5.5" },
    { Element: "Bakır (Cu)", "Oran (%)": "2.5 - 4.5" },
    { Element: "Niyobyum (Nb)", "Oran (%)": "0.15 - 0.45" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="15-5 PH Paslanmaz Çelik"
        description="15-5 PH paslanmaz çelik, çökelme sertleşmesi özelliğine sahip martenzitik paslanmaz çelik türlerinden biridir. Yüksek mukavemet, korozyon direnci ve çatlamaya karşı direnç gerektiren uygulamalar için idealdir. 17-4 PH çeliğine benzer şekilde geliştirilmiş olan bu kalite, daha düşük seviyede mikro yapısal safsızlık içerdiği için üstün mekanik özellikler sunar."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "15-5 PH Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          15-5 PH Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yüksek Mukavemet ve Sertlik:</strong> Çökelme sertleşmesi
            (precipitation hardening) işlemi sayesinde yüksek mukavemet ve
            sertlik sunar. Farklı ısıl işlemlerle sertliği ayarlanabilir.
          </li>
          <li>
            <strong>Korozyon Direnci:</strong> Özellikle orta seviyede korozyon
            direnci gerektiren uygulamalarda tercih edilir. Deniz suyu ve nemli
            ortamlara dayanıklıdır.
          </li>
          <li>
            <strong>Çatlamaya Karşı Dayanıklılık:</strong> 15-5 PH, çatlama ve
            kırılmalara karşı oldukça dayanıklıdır. Bu özelliği, ağır mekanik
            yüklere ve titreşimli ortamlara maruz kalan uygulamalarda kullanımı
            ideal kılar.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Havacılık ve Uzay Endüstrisi:</strong> İniş takımları,
            yapısal parçalar ve yüksek mukavemet gerektiren bileşenlerde yaygın
            olarak kullanılır.
          </li>
          <li>
            <strong>Petrokimya ve Enerji Sektörü:</strong> Yüksek basınç
            dayanımı gerektiren vanalar, pompalar ve basınçlı kaplar gibi
            parçalarda kullanılır.
          </li>
          <li>
            <strong>Savunma Sanayi:</strong> Silah sistemleri, denizaltı
            bileşenleri ve askeri ekipmanlarda üstün dayanıklılık sunar.
          </li>
          <li>
            <strong>Tıp ve Gıda İşleme:</strong> Hijyenik yapısı ve korozyon
            direnci sayesinde tıbbi ekipman ve gıda işleme makinelerinde tercih
            edilir.
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
            <strong>Çekme Dayanımı:</strong> 900-1300 MPa (ısıl işleme göre
            değişir)
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 725 MPa
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
            <strong>Yüksek Mukavemet ve Sertlik:</strong> Yüksek dayanıklılık ve
            uzun ömür sunarak bakım maliyetlerini azaltır.
          </li>
          <li>
            <strong>Korozyon Direnci:</strong> Nemli ve aşındırıcı ortamlarda
            dayanıklılık sağlar.
          </li>
          <li>
            <strong>Çatlama Direnci:</strong> Yüksek darbe dayanıklılığı
            sayesinde güvenilir bir performans sunar.
          </li>
        </ul>
      </div>
    </>
  );
}
