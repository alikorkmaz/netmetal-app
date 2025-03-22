import AppBreadcrumb from "../../components/AppBreadcrumb";
import AppTable from "../../components/AppTable";

export function Quality1_4404() {
  const headers = ["Element", "Oran (%)"];
  const rows = [
    { Element: "Karbon (C)", "Oran (%)": "≤ 0.03" },
    { Element: "Silisyum (Si)", "Oran (%)": "≤ 1.00" },
    { Element: "Manganez (Mn)", "Oran (%)": "≤ 2.00" },
    { Element: "Fosfor (P)", "Oran (%)": "≤ 0.045" },
    { Element: "Kükürt (S)", "Oran (%)": "≤ 0.015" },
    { Element: "Krom (Cr)", "Oran (%)": "16.5 - 18.5" },
    { Element: "Nikel (Ni)", "Oran (%)": "10.0 - 13.0" },
    { Element: "Molibden (Mo)", "Oran (%)": "2.0 - 2.5" },
    { Element: "Azot (N)", "Oran (%)": "≤ 0.11" },
  ];

  return (
    <>
      <AppBreadcrumb
        title="1.4404 Paslanmaz Çelik (AISI 316L)"
        description="1.4404 paslanmaz çelik, özellikle yüksek korozyon direnci gerektiren uygulamalar için geliştirilmiş, düşük karbonlu bir östenitik paslanmaz çelik kalitesidir. 316L olarak da bilinen bu kalite, içeriğindeki molibden sayesinde asidik ve tuzlu ortamlara karşı dayanıklılığı artırır ve sert çevresel koşullara uygun bir çözüm sunar."
        breadcrumbItems={[
          { label: "Kaliteler", href: "/qualities" },
          { label: "1.4404 Paslanmaz Çelik (AISI 316L)" },
        ]}
      />
      <div className="mx-auto rounded-lg">
        <h2 className="mb-6 text-3xl font-bold">
          1.4404 Paslanmaz Çelik (AISI 316L) İçeriği
        </h2>
        <br />
        <AppTable title="Element Oranları" headers={headers} rows={rows} />

        <h3 className="mb-2 text-xl font-semibold">Özellikleri</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Korozyon Direnci:</strong> 1.4404, molibden içeriğiyle
            klorür, tuzlu su ve asidik ortamların neden olduğu korozyona karşı
            üstün bir direnç gösterir. Bu özellik, özellikle denizcilik ve
            kimyasal işleme gibi zorlu koşullarda kullanımını ideal kılar.
          </li>
          <li>
            <strong>Kaynaklanabilirlik:</strong> Düşük karbon içeriği (≤ %0.03)
            sayesinde kaynak sonrası korozyon çatlaklarına karşı oldukça
            dayanıklıdır ve kaynak işlemlerinde çatlak oluşma riskini azaltır.
          </li>
          <li>
            <strong>Sıcaklık Dayanımı:</strong> Yüksek sıcaklıklarda yapısal
            bütünlüğünü korur ve böylece ısıyla temas eden ekipmanlarda güvenle
            kullanılabilir.
          </li>
        </ul>

        <br />

        <h3 className="mb-2 text-xl font-semibold">Uygulama Alanları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Kimya ve Petrokimya Endüstrisi:</strong> Kimyasal işleme
            tankları, boru hatları ve reaktörlerdeki aşındırıcı maddelere karşı
            dayanıklıdır.
          </li>
          <li>
            <strong>Denizcilik ve Gemi İnşası:</strong> Tuzlu su ve nemli
            ortamların neden olduğu paslanmaya karşı direnci, onu gemi parçaları
            ve denizcilik ekipmanlarında vazgeçilmez bir seçenek haline getirir.
          </li>
          <li>
            <strong>Gıda ve İlaç Sanayi:</strong> Yüksek hijyen gerektiren
            uygulamalarda, korozyona dayanıklılığı ve düşük karbon içeriği
            sayesinde tercih edilir.
          </li>
          <li>
            <strong>Tıbbi Ekipmanlar:</strong> Paslanmaya karşı dayanıklılığı ve
            biyouyumluluğu nedeniyle cerrahi ekipmanlar ve medikal implantlarda
            güvenle kullanılır.
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Teknik Özellikler</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Yoğunluk:</strong> 8.0 g/cm³
          </li>
          <li>
            <strong>Çekme Dayanımı:</strong> 500-700 MPa
          </li>
          <li>
            <strong>Akma Dayanımı:</strong> ≥ 190 MPa
          </li>
          <li>
            <strong>Çalışma Sıcaklığı:</strong> -196 °C ile 800 °C arası
          </li>
        </ul>
        <br />

        <h3 className="mb-2 text-xl font-semibold">Avantajları</h3>
        <br />
        <ul className="list-disc pl-5">
          <li>
            <strong>Üstün Korozyon Direnci:</strong> Asidik, klorid içeren ve
            tuzlu su ortamlarında uzun ömürlü performans sunar.
          </li>
          <li>
            <strong>Hijyenik ve Biyouyumlu:</strong> Gıda ve medikal
            uygulamalarda güvenli bir şekilde kullanılabilir.
          </li>
          <li>
            <strong>Isıya Dayanıklılık:</strong> Yüksek sıcaklıklarda bile
            fiziksel özelliklerini koruyarak geniş bir kullanım alanına hitap
            eder.
          </li>
        </ul>
      </div>
    </>
  );
}
