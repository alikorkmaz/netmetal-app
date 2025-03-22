import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4057() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "0.20 - 0.30" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.040" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "15.0 - 17.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "≤ 1.00" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4057 Paslanmaz Çelik"
        description="1.4057, martensitik paslanmaz çelik grubuna ait bir kalite olup, AISI 431 olarak bilinir. Bu paslanmaz çelik, yüksek sertlik ve iyi korozyon direnci sunarak çeşitli endüstriyel uygulamalarda ve kesici aletlerde tercih edilir. Ayrıca, cam kalıp sanayisinde de yaygın olarak kullanılmaktadır. 1.4057, ısıl işlem ile sertleştirilebilen bir yapıya sahip olması nedeniyle önemli bir mekanik dayanım kazanır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4057 Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4057 Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4057, su ve nemli ortamlara
            karşı dayanıklıdır. Orta düzeyde korozyon direnci sunarak, çeşitli
            endüstriyel uygulamalar için uygun bir malzeme olmasını sağlar.
          </li>
          <li>
            <strong>Yüksek Sertlik:</strong> Martensitik yapısı sayesinde
            sertleştirme işlemleri ile yüksek sertlik kazanır. Bu özellik,
            kesici aletler ve cam kalıp uygulamaları için idealdir.
          </li>
          <li>
            <strong>İyi Mekanik Özellikler:</strong> Yüksek çekme ve akma
            dayanımına sahip olması, çeşitli uygulamalarda güvenilir bir seçenek
            olmasını sağlar.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kesici Aletler:</strong> Bıçaklar, makaslar ve diğer kesici
            aletlerde yüksek sertlik ve dayanıklılık sağlamak için sıkça tercih
            edilir.
          </li>
          <li>
            <strong>Cami Kalıp Sanayi:</strong> Cam kalıplarının üretiminde
            kullanılan parçalar ve ekipmanlarda, yüksek sıcaklıklara
            dayanıklılık ve sertlik gerektiren uygulamalarda kullanılır.
          </li>
          <li>
            <strong>Medikal Ekipmanlar:</strong> Cerrahi aletler ve diğer
            medikal uygulamalarda hijyenik özellikleri ve dayanıklılığı
            nedeniyle tercih edilir.
          </li>
          <li>
            <strong>Otomotiv ve Makine Sanayi:</strong> Yüksek mekanik dayanım
            gerektiren parçalar ve bileşenlerde güvenle kullanılır.
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Teknik Özellikler</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yoğunluk:</strong> 7.7 g/cm³
          </li>
          <li>
            <strong>Çekme Dayanımı:</strong> 600-800 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 350 MPa
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
            <strong>Yüksek Sertlik:</strong> Kesici aletler ve cam kalıp
            uygulamaları için gereken yüksek sertliği sağlar.
          </li>
          <li>
            <strong>İyi Korozyon Direnci:</strong> Su ve nemli ortamlara karşı
            dayanıklıdır, bu da dayanıklılık ve güvenilirlik sunar.
          </li>
          <li>
            <strong>Ekonomik Seçenek:</strong> Orta düzeyde maliyetle sağlanan
            yüksek performans sunar.
          </li>
        </ul>
      </div>
    </>
  );
}
