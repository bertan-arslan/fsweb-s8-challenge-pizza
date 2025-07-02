
# Pizza Sipariş Web Sitesi | Pizza Order Website

Bu proje React ile geliştirilmiş, kullanıcıların pizza siparişi verebildiği dinamik ve interaktif bir web uygulamasıdır.  
This project is a dynamic and interactive web application built with React, allowing users to place pizza orders.

---

## Özellikler | Features

- Ana sayfada öne çıkan pizza ve menülerin gösterimi  
  Display of featured pizzas and menu items on the homepage
- Pizza boyutu, hamur tipi ve ekstra malzemeler seçilebilen sipariş formu  
  Order form where users can choose pizza size, crust type, and extra toppings
- Seçilen malzemelere göre dinamik fiyat hesaplama  
  Dynamic price calculation based on selected ingredients
- Form validasyonu ile kullanıcı girdilerinin kontrolü  
  Form validation to check user inputs
- Sipariş sonrası başarı sayfasında özet gösterimi  
  Order summary displayed on a success page after submission
- React Router DOM v5 ile sayfalar arası geçiş  
  Page navigation using React Router DOM v5
- Axios kullanılarak örnek API’ye sipariş gönderimi (mock API)  
  Sending orders to a sample API using Axios (mock API)

---

## Kurulum ve Çalıştırma | Installation and Running

1. Depoyu klonla | Clone the repository:

    ```bash
    git clone https://github.com/bertan-arslan/pizza_order
    ```

2. Proje dizinine gir | Navigate to the project directory:

    ```bash
    cd pizza_order
    ```

3. Bağımlılıkları yükle | Install dependencies:

    ```bash
    npm install
    ```

4. Uygulamayı başlat | Start the application:

    ```bash
    npm run dev
    ```

5. Tarayıcıdan aç | Open in your browser: `http://localhost:5173/`

---

## Teknolojiler | Technologies

- React
- React Router DOM v5
- Axios
- CSS (özelleştirilmiş stiller | custom styles)
- Reqres.in API (mock backend olarak | as a mock backend)

---

## Proje Yapısı (Örnek) | Project Structure (Example)

```
/src
  ├── Bileşenler ve stiller | Components and styles
  ├── Info       // Menü ve malzeme bilgileri | Menu and topping information
  ├── Forms      // Form bileşenleri | Form components
  ├── Home.js    // Ana sayfa | Homepage
  ├── OrderPizza.js // Sipariş formu | Order form
  ├── Success.js // Sipariş sonrası başarı sayfası | Order success page
```

---

## Notlar | Notes

- İlk frontend projem olarak React Router DOM v5 kullandım.  
  I used React Router DOM v5 as this is my first frontend project.
- Form validasyonları ve dinamik fiyat hesaplama uygulandı.  
  Implemented form validation and dynamic price calculation.
- Gerçek backend yerine Reqres.in mock API kullanıldı.  
  Used Reqres.in as a mock API instead of a real backend.
