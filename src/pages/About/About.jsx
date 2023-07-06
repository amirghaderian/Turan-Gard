import React from "react";
import Cards from "./Cards";
const About = () => {
  const styles = {
    backgroundImage: `url('../../../public/assets/airplan2.jpg')`,
  };
  return (
    <>
      <div className="bg-aboutcolor">
        <div
          className="flex bg-fixed bg-no-repeat justify-center h-[70vh]   object-cover mx-auto"
          style={styles}
        ></div>
        <h1 className="relative bottom-32 text-white text-3xl leading-loose pr-14">
          درباره توران گرد
        </h1>
        <p className="relative bottom-32 text-white text-xl pr-20 ">
          تجربه سفری لذت بخش با توران گرد
        </p>
        <div className=" flex mx-auto justify-center ">
          <div>
            <div className=" border-bordcolor max-w-1700">
              <h1  style={{backgroundColor:"#f1b070",borderRadius: "10px",padding: "10px"}} className=" border-b-2 border-bordcolor text-3xl pr-5 ">
                آژانس هواپیمایی توران گرد
              </h1>
              <p className="leading-8 text-xl font-thin pr-5 	">
                عازم کجا هستید؟ هیچ فرقی نمی‌کند. این حق شماست که سفری باکیفیت،
                آسان و مطمئن را تجربه کنید. توران گرد، به عنوان رتبه یک فروش
                بلیط سفر در کنار شماست تا تجربه‌ای شایسته از یک سفر به‌یادماندنی
                را ایجاد کند. سفر باید آسان باشد، مطمئن و به‌صرفه؛ و همه اینها
                در توران گرد خلاصه شده. از هر کجا به هر کجا، با هواپیما، قطار،
                اتوبوس یا تور. حتی برای اقامت شایسته در سفرهای خارجی می‌توانید
                روی هتل‌های توران گرد حساب کنید. توران گرد همسفر حرفه‌ای‌هاست، و
                این تجربه‌ی حرفه‌ای در همه مراحل سفر همراه شماست. از زمانی که
                قصد سفرکرده‌اید و نیاز به راهنمایی دارید ، تا خرید بلیط و
                پشتیبانی 24 ساعته توسط تیم 247 نفره مرکز پشتیبانی. حتی وقتی که
                برنامه سفرتان تغییر کرده و قصد استرداد بلیط را دارید ما در کنار
                شما هستیم. توران گرد برندی از هلدینگ پرافتخار توشا (توسعه تجربه
                شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت شما در
                سکوی اول گردشگری کشور ایستاده. ما به این جایگاه قانع نشده‌ایم و
                تلاش‌مان برای بهبود لحظه‌ای متوقف نمی‌شود. البته در این مسیر
                پرپیچ‌و‌خم تنها نیستیم و همسفران شایسته‌ای چون شما دلگرمی اصلی
                ماست. آمارها نشان می‌دهد که بیشتر از 97 درصد از مشتریان، ما را
                به دیگران توصیه کرده‌اند و سفیر پیام توران گرد شده‌اند. مطمئن
                هستیم راه را درست رفته‌ایم، چرا که مورداعتماد شما هستیم.
              </p>
            </div>
            <div className="  border-bordcolor mt-28 pr-5">
              <h1 style={{backgroundColor:"#f1b070",borderRadius: "10px",padding: "10px"}} className="border-b-2 border-bordcolor text-3xl mt-3 pr-5 ">
                ارزش های توران گرد
              </h1>
              <p className="leading-8 text-xl font-thin pr-5">
                توران گرد یک خانواده بزرگ است؛ خانواده‌ای که در آن روابط افراد
                بر اساس اعتماد و همکاری متقابل تعریف شده. در بین اعضای این
                خانواده ارزش‌هایی شکل گرفته تا کار کردن به یک فعالیت لذت‌بخش
                تبدیل شود.
              </p>
            </div>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
