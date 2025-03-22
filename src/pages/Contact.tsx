import { Card, Button, Label, TextInput, Textarea } from "flowbite-react";
import AppBreadcrumb from "../components/AppBreadcrumb";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const mapContainerStyle = { height: "400px", width: "100%" };
const center = { lat: 40.82368450875488, lng: 29.34638185364474 };

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_8qo2xrc",
          "template_jkveiiu",
          formRef.current,
          "yXkvw4R7dhRnH-XOB",
        )
        .then(() => alert("Mesajınız başarıyla gönderildi!"))
        .catch((error) => alert("Hata: " + JSON.stringify(error)));
      formRef.current.reset();
    }
  };

  return (
    <>
      <AppBreadcrumb
        title="İLETİŞİM"
        description="Bizimle iletişime geçerek ihtiyaçlarınız hakkında bilgi alabilir, çözüm önerilerimizi öğrenebilirsiniz. Ekibimiz, sorularınızı en kısa sürede yanıtlamak için burada."
        breadcrumbItems={[{ label: "İletişim" }]}
      />
      <div className="mx-auto max-w-6xl space-y-8 p-4 lg:p-6">
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
          {/* İletişim Bilgileri */}
          <div className="rounded bg-white p-6 shadow lg:w-1/3">
            <h2 className="mb-4 text-lg font-bold">İletişim Bilgileri</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
              info@netstratejikmetal.com
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="pr-2" />
              İstim Sanayi Sitesi, No: 270 Tuzla/İstanbul <br />
            </p>
            <div className="mt-8">
              <LoadScript googleMapsApiKey="AIzaSyDToEnCdYbitchau44Ku3ncQssErqJycJo">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* İletişim Formu */}
          <Card className="w-full lg:w-2/3">
            <form ref={formRef} onSubmit={sendEmail} className="grid gap-4 p-6">
              <h2 className="text-lg font-bold">İletişim Formu</h2>
              <p>
                Mesajınız yetkililerimiz tarafından incelendikten sonra ilgili
                departmanlara ulaştırılacak ve en kısa sürede cevaplanacaktır.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName" value="Ad *" />
                  <TextInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" value="Soyad *" />
                  <TextInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" value="Firma Adı *" />
                  <TextInput id="company" name="company" type="text" required />
                </div>
                <div>
                  <Label htmlFor="gsm" value="GSM *" />
                  <TextInput id="gsm" name="gsm" type="text" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email" value="E-posta *" />
                <TextInput id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="message" value="Mesaj" />
                <Textarea id="message" name="message" rows={4} required />
              </div>

              <Button type="submit" className="w-full lg:w-auto">
                Gönder
              </Button>
            </form>
          </Card>
        </div>

        {/* Harita */}
      </div>
    </>
  );
}
