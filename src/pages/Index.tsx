import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Wrench",
      title: "Установка сантехники",
      description: "Монтаж смесителей, раковин, ванн, унитазов и душевых кабин"
    },
    {
      icon: "Droplets",
      title: "Ремонт водопровода",
      description: "Устранение протечек, замена труб, ремонт кранов"
    },
    {
      icon: "Pipette",
      title: "Прочистка канализации",
      description: "Устранение засоров любой сложности современным оборудованием"
    },
    {
      icon: "Settings",
      title: "Замена труб",
      description: "Замена старых труб на современные полипропиленовые"
    },
    {
      icon: "Shower",
      title: "Установка счетчиков",
      description: "Установка и замена счетчиков воды с опломбировкой"
    },
    {
      icon: "Waves",
      title: "Аварийные работы",
      description: "Срочный выезд при протечках и авариях 24/7"
    }
  ];

  const priceList = [
    { service: "Установка смесителя", price: "от 1 500 ₽" },
    { service: "Установка раковины", price: "от 2 000 ₽" },
    { service: "Установка унитаза", price: "от 3 000 ₽" },
    { service: "Установка ванны", price: "от 5 000 ₽" },
    { service: "Замена труб (за метр)", price: "от 800 ₽" },
    { service: "Прочистка канализации", price: "от 1 200 ₽" },
    { service: "Устранение протечки", price: "от 1 000 ₽" },
    { service: "Установка счетчика воды", price: "от 2 500 ₽" }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/0173e6ab-c8d9-4321-af01-318d233071c0/files/8eda7542-809b-477e-bfbd-57491d265a58.jpg",
      title: "Ремонт ванной комнаты",
      description: "Полная замена сантехники и трубопровода"
    },
    {
      image: "https://cdn.poehali.dev/projects/0173e6ab-c8d9-4321-af01-318d233071c0/files/75bc9072-f1a5-487c-bbc9-82345fb7ffb8.jpg",
      title: "Установка водопровода",
      description: "Монтаж системы водоснабжения в новостройке"
    },
    {
      image: "https://cdn.poehali.dev/projects/0173e6ab-c8d9-4321-af01-318d233071c0/files/dabdcbfa-4de8-4076-a4f1-3bf984e0e8ab.jpg",
      title: "Кухонная сантехника",
      description: "Установка мойки и смесителя премиум-класса"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличная работа! Быстро устранили протечку, все аккуратно и качественно. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Профессиональный мастер. Заменил все трубы в квартире за два дня. Очень доволен результатом.",
      rating: 5
    },
    {
      name: "Елена Сидорова",
      text: "Вежливый специалист, пришел вовремя. Установил новый смеситель, все работает отлично!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <span className="text-2xl font-bold">СантехПро</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary to-secondary/90 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-white">Работаем с 2010 года</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональные сантехнические услуги
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Качественный ремонт и установка сантехники. Гарантия на все работы. Выезд в день обращения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать мастера
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 text-lg">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">2000+</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">аварийная служба</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Полный спектр сантехнических работ любой сложности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <Icon name={service.icon} size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Прозрачные цены без скрытых доплат
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {priceList.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-4 border-b last:border-b-0"
                    >
                      <span className="text-lg">{item.service}</span>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-center">
                    💡 Точную стоимость работ мастер рассчитает после осмотра
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Примеры выполненных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <Card key={index} className="overflow-hidden hover-scale cursor-pointer">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium">Ваше имя</label>
                      <Input 
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Телефон</label>
                      <Input 
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Описание проблемы</label>
                      <Textarea 
                        placeholder="Опишите вашу проблему..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Телефон</div>
                    <div className="text-xl font-bold">+7 (999) 123-45-67</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="text-xl font-bold">info@santehpro.ru</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Адрес</div>
                    <div className="text-xl font-bold">г. Москва, ул. Ленина, 123</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Режим работы</div>
                    <div className="text-xl font-bold">Ежедневно, 24/7</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
                <span className="text-2xl font-bold">СантехПро</span>
              </div>
              <p className="text-gray-300">
                Профессиональные сантехнические услуги с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <div className="space-y-2">
                <div><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Услуги</a></div>
                <div><a href="#prices" className="text-gray-300 hover:text-primary transition-colors">Прайс</a></div>
                <div><a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors">Портфолио</a></div>
                <div><a href="#reviews" className="text-gray-300 hover:text-primary transition-colors">Отзывы</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div>+7 (999) 123-45-67</div>
                <div>info@santehpro.ru</div>
                <div>г. Москва, ул. Ленина, 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
            <p>© 2024 СантехПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
