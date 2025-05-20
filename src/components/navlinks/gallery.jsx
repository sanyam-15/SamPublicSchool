import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import HeroSection from "../About Us/HeroSection";

const images = [
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689720/471599952_122099435396712060_7793245270742167525_n_sggwxh.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689718/471919267_122099437100712060_6548810460977240164_n_y3e7gl.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689715/471677208_122099472548712060_5002917388720445524_n_f8tlid.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689713/471308790_122099473196712060_1315160518816551848_n_qfppl8.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689707/470544982_122099473058712060_8061378658229770119_n_i4q1p0.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689701/471599035_122099472506712060_4654778966384840171_n_csnvox.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689697/470533696_122099473358712060_1188304323290354088_n_h1nuvy.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689691/471308252_122099473436712060_7097893539320047613_n_fpv0hd.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689687/470805306_122099473262712060_7237612633151639040_n_qg4bhp.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689681/470517353_122099473460712060_7718075936034112638_n_xrrwza.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689675/470527849_122099473412712060_5603822824640628776_n_svolci.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689665/470515263_122099473748712060_6283478002191984343_n_iamaa2.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689660/471588899_122099473502712060_1766291771834279622_n_ppnqbp.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689650/471539366_122099472950712060_3658307286031882924_n_ootokj.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689642/474777543_122111648600712060_4650863415183239415_n_ce8tjp.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689637/474897384_122111648684712060_6649159206130560111_n_dnhopi.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689631/475304142_122111648642712060_492203705658404467_n_ypbh3z.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689623/475283427_122111648726712060_4480290508250943286_n_kanotb.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689617/475143961_122111648786712060_6529887860989448341_n_zq1jvc.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689611/475050668_122111648828712060_7872812564843199891_n_emkzcs.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689602/475225415_122111648912712060_5657657883529169935_n_rdjwq9.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689601/474992233_122111648870712060_8527548052767353847_n_whjogl.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689591/475088638_122111649128712060_5903148170193978044_n_gigzyg.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689587/474883856_122111648996712060_3273489322518126832_n_dyrtwn.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689582/475029294_122111649038712060_902469803263662510_n_z8byn1.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689567/475585404_122113306712712060_5194260667004850455_n_mq14av.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689565/475074027_122113306844712060_4084667878244608235_n_p0gw6m.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689560/476164008_122113305422712060_3425245953666242387_n_n945g2.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689555/475879080_122113309106712060_808789724755073520_n_jhubmc.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689550/475964479_122113309160712060_6210196000258133605_n_docoli.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689545/475088358_122113310210712060_7318877393122282283_n_lpvuhp.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689540/475914050_122113305806712060_2254439833672303172_n_x45dfd.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689535/475877485_122113310240712060_7212978987169394418_n_jzoljw.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689530/475089278_122113310294712060_447922571777756556_n_omozsq.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689526/475845256_122113310312712060_6669424690039287558_n_fhwdip.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689521/475761136_122113310342712060_870184547112337443_n_rxa5vy.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689515/476222801_122113306166712060_7018212819508034553_n_ocscge.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689510/475782155_122113310384712060_8678344809193703750_n_ntvqyx.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689505/475810210_122113306256712060_2077566416399066876_n_cksvwp.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689501/475775744_122113306304712060_7568075258198393919_n_qowfyb.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689495/476071991_122113306478712060_3958951529513769451_n_iolxwo.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689491/475795880_122113310588712060_8371592989822258943_n_doeacq.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689487/476000385_122113310654712060_7934777789976938675_n_jwro2z.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689482/475919820_122113328786712060_5560101679432757502_n_r6pcpk.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689478/475837017_122113328810712060_2908717822989419640_n_y6tl4v.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689450/476109416_122113328834712060_4374553790741752579_n_h4xii2.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689438/475881864_122113328396712060_2074060441548766599_n_cc8mj1.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689418/475856928_122113328846712060_9014819319949112160_n_cnfnvu.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689408/476234112_122113328864712060_1191631593094965616_n_xw1ozn.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689399/475080993_122113328888712060_2269930903160588356_n_a4sckt.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689383/475860108_122113328606712060_3745558625802037848_n_fhr60r.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689373/476122867_122113328912712060_4260486636594561816_n_bgdxci.jpg",
  "https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747689366/475878989_122113328924712060_6476296612563306425_n_znqki7.jpg"
];


const itemsPerPage = 24;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleImageClick = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const displayedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      <HeroSection 
        moto={"Our School Gallery"} 
        description={"Capturing moments of learning, growth, and achievement"} 
        section={"Gallery"} 
      />

      <div className="flex flex-col items-center py-10 px-4 max-w-7xl mx-auto">
        {/* Image Grid with Animation */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
              onClick={() => handleImageClick(src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
         <img
  src={src}
  alt={`Gallery ${index + 1}`}
  className="w-full h-full object-cover aspect-square"
  style={{ zIndex: 90 }}
  loading="lazy"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">Event {index + 1}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <motion.div 
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 dark:bg-navy-700 text-gray-500' : 'bg-navy-700 text-gold-400 hover:bg-navy-800'}`}
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-gold-600 text-white font-bold"
                    : "bg-gray-200 dark:bg-navy-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-navy-600"
                }`}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 dark:bg-navy-700 text-gray-500' : 'bg-navy-700 text-gold-400 hover:bg-navy-800'}`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Modal for Enlarged Image */}
       <AnimatePresence>
  {modalImage && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-4xl w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
      >
        <img
          src={modalImage}
          alt="Enlarged"
          className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[90vh]"
        />
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          onClick={closeModal}
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  );
}