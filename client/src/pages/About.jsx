
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Logo from "../assets/imageAboutUs.66fcedbedaab4e7a9fd8.jpg"
export default function About() {
  const moblie = "0096550310352"

  return (
      <div>
      <div className='  items-center sm:justify-center lg:justify-between   lg:flex  '>
        <div className="  lg:w-1/2">   
          <img src={Logo} width="600px"  />
        </div>
            
      <div className="  lg:w-1/2">

      <h1 className='text-4xl mt-0 py-2 text-[#000]  text-center mx-auto my-7'>
      لماذا نحن أفضل شركة نقل عفش في الكويت
            </h1>
            <div className=' text-xl text-[#0f0f0f] flex flex-col gap-6' dir="rtl">
           
            <p >
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">             الخبرة:   </span> 
            تتمتع شركات نقل العفش بخبرة واسعة في مجال نقل الأثاث من مكان إلى آخر، مما يضمن لك نقلًا آمنًا وسريعًا دون حدوث أي تلف للعفش.        
             </p>
            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold"> المعدات :  </span>
            تمتلك شركات نقل العفش جميع المعدات اللازمة لنقل الأثاث بأمان، مثل: الرافعات، والشاحنات، والسيارات المغلقة، وأدوات التغليف.

            </p>
            <p>
            <span className=" text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  العمالة المدربة : </span>

            تمتلك شركات نقل العفش عمالة مدربة على فك وتركيب الأثاث وتغليفه بشكل صحيح، مما يضمن لك نقلًا آمنًا دون حدوث أي خدوش أو كسر
            </p>

            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  التأمين: </span>

            توفر بعض شركات نقل العفش تأمينًا ضد الأضرار، مما يضمن لك تعويضًا في حال حدوث أي تلف للعفش أثناء عملية النقل
            </p>
            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  الأسعار التنافسية : </span>
            تقدم شركات نقل العفش أسعارًا تنافسية تناسب جميع الميزانيات.

            </p>
            <p>
            <span className=" text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  الوقت :  </span>
            نعمل 24 ساعة على مدار الأسبوع لنجعلك تختار الوقت الذى يناسبك للحفاظ على راحتك.

            </p>

      </div>          
      </div>
      </div>
     
     
     



      <div className='w-50 h-8    items-center flex justify-between m-0  mx-auto  ' >     
    <a href={`tel:${moblie}`} target="_blank">
     <p className=" text-2xl lg:hidden  text-white right-0 bottom-28 font-semibold justify-between flex  fixed bg-red-600  py-3 px-4 rounded-3xl float-right  " > 
     <IoMdCall size={30} />
                                  اتصل الان        
          </p> 
     </a>
     <a href="https://wsend.co/96550310352" target="_blank">
     <p className=" text-2xl text-white right-0 bottom-12 font-semibold justify-between flex  fixed bg-[#25D366]  py-3 px-4 rounded-3xl float-right  " > 
     <FaWhatsapp size={30} />
                                   الواتساب   
     
     </p>
     </a>
      </div>


      

          
     </div>
    );
  }


  /*
  
     <div className='max-w-2xl mx-auto p-3 text-center '>
          <div>
            <img src={Logo} alt="" width='200px' className=" mx-auto rounded-lg " />
            <h1 className='text-3xl font font-semibold text-center my-7'>
              مرحبا بكم في شركتنا
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
              نحن شركة قاسم لنقل العفش والأثاث، نفتخر بتقديم خدمات نقل العفش والأثاث بأعلى مستويات الجودة والاحترافية. نحن نقدم خدماتنا بعناية فائقة وبأحدث التقنيات والمعدات لضمان سلامة وسلامة عفشك وأثاث منزلك. 
              </p>
  
              <p>
             
                مهمتنا هي توفير تجربة نقل مريحة وسلسة لعملائنا، حيث نضع رضا العملاء في قلب كل ما نقوم به.
                 بفضل فريقنا المدرب جيدًا وذو الخبرة الواسعة
                 ، نحن ملتزمون بتحقيق أعلى معايير الجودة والموثوقية 
                 في كل خدمة نقدمها. اعتمادًا على سنوات من الخبرة في هذا المجال،
                 نحن نضمن أن عفشك وأثاثك سيصلون إلى وجهتهم بأمان وفي الوقت المحدد.
              </p>
  
              <p>
              اختر شركة قاسم لنقل العفش والأثاث واستمتع براحة البال خلال عملية النقل
            
              </p>
            
            </div>
          </div>
        </div>
        <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction Logo={Logo1}/>
      </div>
  
  
  
  
  
  
  */