import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4410() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.03" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 1.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.035" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.010" },
    { Element: "Krom (Cr)", "Oran (%)": "24.0 - 26.0" },
    { Element: "Nikel (Ni)", "Oran (%)": "6.0 - 8.0" },
    { Element: "Molibden (Mo)", "Oran (%)": "3.0 - 5.0" },
    { Element: "Azot (N)", "Oran (%)": "0.18 - 0.30" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4410 Süper Duplex Paslanmaz Çelik"
        description="1.4410 süper duplex paslanmaz çelik, yüksek mekanik mukavemet ve üstün korozyon dayanımı sunan bir çift fazlı (östenitik + ferritik) paslanmaz çelik türüdür. Özellikle klorür kaynaklı çatlak korozyonu ve çukurlaşmaya karşı dirençli olan bu çelik, zorlu deniz suyu ortamları, kimyasal tesisler ve petrol-doğal gaz endüstrisi gibi aşırı koşullarda güvenilir bir performans sağlar."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4410 Süper Duplex Paslanmaz Çelik" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4410 Süper Duplex Paslanmaz Çelik İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> Yüksek molibden, krom ve azot
            içeriği sayesinde klorür içeren ortamlarda mükemmel korozyon direnci
            sunar. Çukurlaşma, çatlak korozyonu ve genel korozyona karşı
            dirençlidir; bu özelliğiyle ağır endüstriyel ve deniz suyu
            uygulamalarında tercih edilir.
          </li>
          <li>
            <strong>Yüksek Mekanik Dayanım:</strong> Süper duplex yapısı
            sayesinde klasik östenitik paslanmaz çeliklere göre daha yüksek
            mukavemete sahiptir ve yüksek basınç altında dayanıklılığını korur.
          </li>
          <li>
            <strong>Sıcaklık Dayanımı:</strong> -50 °C ile 300 °C arasında geniş
            bir sıcaklık aralığında kararlıdır. Özellikle düşük sıcaklıklarda
            mukavemetini korur ve kırılgan hale gelmez.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Petrol ve Doğal Gaz Endüstrisi:</strong> Yüksek korozyon
            direnci ve mekanik dayanıklılığı ile boru hatları, vanalar,
            platformlar ve sualtı ekipmanlarında tercih edilir.
          </li>
          <li>
            <strong>Kimya ve Petrokimya Tesisleri:</strong> Güçlü kimyasal
            dayanımı sayesinde asidik ve klorür içeren ortamlarda güvenilir bir
            malzemedir.
          </li>
          <li>
            <strong>Denizcilik ve Gemi İnşası:</strong> Tuzlu su ortamlarında
            dayanıklılığı, gemi parçaları, su altı boru sistemleri ve deniz suyu
            filtreleme tesislerinde kullanımı için idealdir.
          </li>
          <li>
            <strong>Kağıt ve Selüloz Endüstrisi:</strong> Çukurlaşma ve çatlak
            korozyonuna karşı dayanıklılığı sayesinde yüksek kimyasal içeren
            tesislerde güvenle kullanılır.
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
            <strong>Çekme Dayanımı:</strong> 750-1000 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 550 MPa
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
            <strong>Üstün Korozyon Direnci:</strong> Klorürlü ortamlarda ve
            deniz suyunda çukurlaşma, çatlak korozyonu ve genel korozyona karşı
            üstün bir dayanıklılık gösterir.
          </li>
          <li>
            <strong>Yüksek Mukavemet:</strong> Geleneksel duplex ve östenitik
            paslanmaz çeliklere göre çok daha yüksek mukavemet sağlar.
          </li>
          <li>
            <strong>Düşük Termal Genleşme:</strong> Çeşitli sıcaklık
            dalgalanmalarına karşı direnç gösterir ve kararlı yapısını korur.
          </li>
        </ul>
      </div>
    </>
  );
}
