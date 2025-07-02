# Pizza Sipariş Web Sitesi

React ile geliştirilmiş, kullanıcıların pizza siparişi verebildiği dinamik ve interaktif bir web uygulaması.

---

## Özellikler

- Ana sayfada öne çıkan pizza ve menülerin gösterimi
- Pizza boyutu, hamur tipi ve ekstra malzemeler seçilebilen sipariş formu
- Seçilen malzemelere göre dinamik fiyat hesaplama
- Form validasyonu ile kullanıcı girdilerinin kontrolü
- Sipariş sonrası başarı sayfasında özet gösterimi
- React Router DOM v5 ile sayfalar arası geçiş
- Axios kullanılarak örnek API’ye sipariş gönderimi (mock API)

---

## Kurulum ve Çalıştırma

1. Depoyu klonla:

```bash
git clone https://github.com/bertan-arslan/pizza_web
```

2. Proje dizinine gir:

```bash
cd pizza_order_app
```

3. Bağımlılıkları yükle:

```bash
npm install
```

4. Uygulamayı başlat:

```bash
npm run dev
```

5. Tarayıcında `http://localhost:5173/` adresinden aç.

---

## Teknolojiler

- React
- React Router DOM v5
- Axios
- CSS (özelleştirilmiş stiller)
- Reqres.in API (mock backend olarak)

---

## Proje Yapısı (Örnek)

- `/src` — React bileşenleri ve stiller
- `/src/Info` — Menü ve malzeme bilgileri
- `/src/Forms` — Form bileşenleri
- `/src/Home.js` — Ana sayfa
- `/src/OrderPizza.js` — Sipariş formu
- `/src/Success.js` — Sipariş sonrası başarı sayfası

---

## Notlar

- İlk frontend projem olarak React Router DOM v5 kullandım.
- Form validasyonları ve dinamik fiyat hesaplama uygulandı.
- Gerçek backend yerine Reqres.in mock API kullanıldı.

---

## Lisans

MIT © 2025 [Senin Adın]
