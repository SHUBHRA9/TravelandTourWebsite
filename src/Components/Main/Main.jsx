import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import {GoLocation} from 'react-icons/go'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data=[
    {
        id:1,
        imgSrc:img,
        destTitle: 'Chitrakote Falls',
        location: 'Jagdalpur',
        grade: 'Cultural Relax, Boating  ',
        description: 'The broadest waterfall in India, Chitrakote is popularly known as the Niagara of India, because of its width. Situated in the west side of Jagdalpur in the Bastar District of Chhattisgarh, this waterfall originates from the Indravati river. Chitrakote Falls is at the height of about 30 metres with a width of 985 feet, and during monsoons, you can watch the falls at its full glory. The fall cascades from the top of the cliff in 3 streams during summers. A significant attraction below the fall is the shrine of Lord Shiva with many small Shivalingas. During the low season, locals and tourists are seen to be swimming, bathing or even using paddle boats on the river.'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Barnawapara Wildlife Sanctuary',
        location: 'North-East Raipur',
        grade: 'Jungle Safaris, Bird Watching ',
        description:'Barnawapara Wildlife sanctuary, is named after Bar and nawapara forest villages, which are in the heart of the sanctuary. It is a land mass of undulating terrain dotted with numerous low and high hillocks well forested area of North-eastern corner of Raipur district. The Tributaries of Mahanadi are the source of water. River Balam Delhi forms the western boundary and Jonk River forms the north-eastern boundary of the Sanctuary. The well stocked forests of the Sanctuary Classified as Teas sal and mixed forests. This sanctuary is famous for the frequent sighting of the Indian bison (Gaur) Cheetal, Sambhar, Neelgai, Wild boar are commonly seen.Bar-Nawapara boosts of over 150 species Birds.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Charre-Marre Waterfall',
        location: 'Kanker',
        grade: 'Cultural Relax, Picnic  ',
        description: 'Charre Marre Waterfalls is a refreshing and offbeat place to visit in the state of Chattisgarh, Kanker District. The tortuous waterfall is 16 meters high and the clear water falling from such a great height is quite a sight to see. The bountiful and pristine Jogidhara river is the reason behind the birth of this mesmerizing and bubbling waterfall. The water meanders through hills and verdant trees producing ear pleasing sounds. The reservoir that forms at the bottom of the waterfall is perfect to take a dip in. The cool water will rejuvenate your soul and body. You can also dangle your feet into the small pond formed at the bottom and spend some peaceful time enjoying the picturesque beauty of this place.'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle: 'Sirpur',
        location: 'Mahasamund',
        grade: 'Cultural Relax, Historical Place  ',
        description: 'Sirpur is a small village located in the state of Chhattisgarh, situated on the banks of river Mahanadi. It is 35 km away from the Mahasamund district and around 78 km away from the city of Raipur, which is the capital of Chhattisgarh. The village of Sirpur is an archaeological wonder. Inspiration to many architects, this village is rich in its temple culture. A quaint hidden gem, it has a deep connection to the Buddhism world and a treasure for archaeological findings from the 8th century.There are numerous temples one can visit, and is generally a hub for passionate historians. A look at the historical artefacts and the deep carvings on the walls of the temples have inspired many architects around the world. The Buddhist monasteries of this village are said to be one of the most important and most significant in India. Apart from the rich historical importance and fascinating findings in these villages, there is more to this village. The Chhattisgarh Tourism Board organises a music and dance festival here to promote the Buddhist sites and celebrate its culture. Offering a rare mix of art and culture with different performance and a deep history and evolution of art, Sirpur is a peaceful village filled with wonders. Also known as Shripur or Sripur, the name translates to an auspicious city. It has a rich cultural and architectural background and is often referred to as the ancient heritage. A report on a Lakshmana temple written by Alexander Cunningham (a British colonial) when he visited in the year 1872, brought Sirpur international attention. Famous for the many temples here, many site excavations over the years have led to prominent archaeological findings and understanding of the temple architecture evolution. The excavations conducted in the 2000s yielded Shiva temples, 5 Vishnu temples and Jain Viharas.'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle: 'Mainpat',
        location: 'Surguja ',
        grade: 'Cultural Relax, Treking, Paragliding  ',
        description: 'Mainpat is an underrated hill station with green pastures, deep valleys, breathtaking waterfalls, dense forests and untouched rivulets. The hill station hasn’t been completely commercialised yet and receives a relatively smaller influx of tourists compared to its counterparts. Mainpat is often called as Shimla of Chhattisgarh and Mini Tibet owing to its huge Tibetan population and influence over the area. The Tibetan refugees were rehabilitated in Mainpat after the Chinese invasion of Tibet and have since found a home in Mainpat. That’s another great thing about Mainpat, the confluence of cultures and diverse traditions only add to the picturesque village charm.'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle: 'Gangrel Dam',
        location: 'Dhamtari ',
        grade: ' Picnic, Boating, Water Sports  ',
        description: 'The Gangrel Dam is the longest dam in Chhatisgarh and has been built across Mahanadi River. A stunning feat of architecture, the dam length is a whopping 1,830 metres! It stands in the Dhamtari district, approximately 15 kilometres away from the main town of Dhamtari and 90 kilometres away from Raipur. Gangrel Dam is also perfect for enjoying recreational activities with family or friends as well as state of the art watersports such as Jet skiing, Water surfing, Water skiing, Scuba Diving, Sailing, Parasailing, and Kite surfing. The dam overlooks the swift torrents of the Mahanadi River making it an enjoyable sight to behold. On the banks of the waters, there are a number of resorts and sandbanks, giving it the appearance of a Mini Goa!The dam was built to perform various activities, and essential functions such as irrigation, generating power and also to provide water to Bhilai Steel Plant and the city of Raipur. The Gangrel Dam provides a sense of refreshment for the visitors through the means of water rides and water activities as well as the sprawling green gardens. '
    },
    {
        id:7,
        imgSrc:img7,
        destTitle: 'Ghatarani Waterfalls',
        location: 'Jamahi ',
        grade: 'Picnic, Relax ',
        description: 'Located 85 km from the city of Raipur is Ghatarani Waterfalls, the largest in the state of Chattisgarh. Surrounded by lush greenery, this breathtaking sight is a popular picnic spot. A small trek through a forest would lead you to this beautiful natural beauty. At the bottom of the waterfall lies a naturally formed pool. Enjoy a swim, play with your fam, or unwind in the pool. Although the waterfalls beauty enriches in the rainy season – when the water is in full flow – it is best to avoid going during this time because of slippery terrains and mudslides. There won’t be a lot of water available during the summer. Hence, it is recommended to visit the Ghatarani Falls after the monsoon, when it can be witnessed in its full glory. It is also recommended to avoid visiting this particular waterfall during monsoon, as the rough and fast flowing waters and slippery rocks can be dangerous.'
    },

]


const Main=() => {

    useEffect(() => {
        Aos.init({duration:2000})

    }, [])



    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">


                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
                        return(
                            <div key ={id} data-aos="fade-up" className="singleDestination">
                                
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <GoLocation className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>  +1</small></span>                                           
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                        
                                    </div>

                                    
                                </div>
                            </div>
                        )
                        }
                    )
                }
            </div>
        </section>
    )
}
export default Main