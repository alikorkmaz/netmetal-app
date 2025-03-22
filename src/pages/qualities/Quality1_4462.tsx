import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4462() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.03" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "2.0 - 2.5" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.030" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.010" },
    { Element: "Krom (Cr)", "Oran (%)": "22.0 - 23.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "4.5 - 6.5" },
    { Element: "Molibden (Mo)", "Oran (%)": "3.0 - 3.5" },
    { Element: "Azot (N)", "Oran (%)": "0.08 - 0.20" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4462 Duplex Paslanmaz Çelik"
        description="1.4462 duplex paslanmaz çelik, yüksek mukavemet ve korozyon dayanımı sunan bir çift fazlı (östenitik + ferritik) paslanmaz çelik türüdür. İdeal dengeyi sağlayan çift faz yapısı sayesinde, özellikle kimyasal ve denizcilik sektörlerinde korozyon direnci ve mekanik dayanım gerektiren zorlu ortamlarda yaygın olarak kullanılır."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4462 Duplex Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4462 Duplex Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4462, özellikle klorür içeren
            ortamlarda mükemmel korozyon dayanımı gösterir. Çukurlaşma, çatlak
            ve genel korozyona karşı dirençlidir, bu yüzden kimyasal işleme,
            denizcilik ve petrol-doğal gaz sektörlerinde tercih edilir.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Çift fazlı yapısı sayesinde
            klasik östenitik paslanmaz çeliklere göre daha yüksek mukavemete
            sahiptir. Bu özelliğiyle ince et kalınlıklarında dahi sağlamlık
            sunar.
          </li>
          <li>
            <strong>Isı Dayanımı:</strong> Orta dereceli ısılara karşı
            stabilitesini korur ve mekanik özelliklerini kaybetmez. Çeşitli ısıl
            koşullarda dayanıklıdır ve uzun ömürlüdür.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Petrokimya ve Doğal Gaz Endüstrisi:</strong> Asitlere,
            klorid içeren ortamlara ve yüksek basınca dayanıklılığı sayesinde
            petrol platformları, boru hatları ve valflerde yaygın olarak
            kullanılır.
          </li>
          <li>
            <strong>Kimya Sanayi:</strong> Yüksek kimyasal dayanımı sayesinde
            reaktörler, tanklar ve pompa bileşenlerinde güvenle kullanılır.
          </li>
          <li>
            <strong>Denizcilik ve Gemi İnşası:</strong> Tuzlu suya karşı
            mükemmel dayanımı, deniz suyu uygulamaları, gemi bileşenleri ve
            dalgıç ekipmanlarında kullanımını ideal kılar.
          </li>
          <li>
            <strong>Kağıt ve Selüloz Endüstrisi:</strong> Çukurlaşma ve çatlak
            korozyonuna karşı dayanıklılığı sayesinde kağıt hamuru işleme
            tesislerinde tercih edilir.
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
            <strong>Çekme Dayanımı:</strong> 620-850 MPa
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
            <strong>Mükemmel Korozyon Dayanımı:</strong> Özellikle klorid içeren
            ortamlarda çukurlaşma ve çatlak korozyonuna karşı dirençlidir.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Geleneksel östenitik paslanmaz
            çeliklere göre daha yüksek mekanik dayanım sunar.
          </li>
          <li>
            <strong>Düşük Termal Genleşme:</strong> Düşük termal genleşme
            katsayısı, onu değişken ısıl koşullarda bile kararlı bir hale
            getirir.
          </li>
        </ul>
      </div>
    </>
  );
}
