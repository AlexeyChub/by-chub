import React from 'react';
import Emoji from '../commons/img/img_1.png'
import Emoji2 from '../commons/img/img_2.png'
import Emoji3 from '../commons/img/img_3.png'
import Emoji4 from '../commons/img/img_4.png'
import imageSelf from '../commons/img/img_5.png'
import {ReactComponent as logo1} from '../commons/img/logo1.svg'
import {ReactComponent as logo2} from '../commons/img/logo2.svg'
import {ReactComponent as logo3} from '../commons/img/logo3.svg'

import './main.css'

const Main = () => {
    return (
        <div className={`Main_wrapper`}>
            <div className={`MAin_wrap`}>
                <div className={`Header_wrap`}>
                    <div className={`logo_main`}>1223</div>
                    <div className={`Header_buttons`}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className={`autorization`}>
                        <span>login</span>
                        <span>Вход</span>
                    </div>
                </div>
                <div className={`item_first`}>
                    <span>Experience the easier way <br/>for transaction</span>
                    <span>Quo is the most easier way for transaction with your friends and family, now matter where are you. <br/>An exceptional way for make your life one step easier</span>
                    <span>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.75 0.0605469C31.7732 0.0605469 40.75 9.03305 40.75 20.0721C40.75 31.088 31.7732 40.0605 20.75 40.0605C9.72683 40.0605 0.75 31.088 0.75 20.0721C0.75 9.03305 9.72683 0.0605469 20.75 0.0605469ZM18.472 12.1204C18.0473 12.1204 17.6419 12.2168 17.2558 12.4098C16.7732 12.6799 16.3871 13.1044 16.1747 13.6061C16.0396 13.9535 15.8272 14.9954 15.8272 15.0147C15.6149 16.1532 15.499 18.0056 15.499 20.0509C15.499 22.0017 15.6149 23.775 15.7886 24.9327C15.8079 24.952 16.0203 26.2448 16.2519 26.6886C16.6766 27.499 17.5068 28.0007 18.3948 28.0007H18.472C19.0512 27.9814 20.2674 27.4797 20.2674 27.4605C22.3137 26.6114 26.3485 23.9679 27.9701 22.212L28.0859 22.0962C28.2983 21.884 28.5685 21.556 28.6264 21.4788C28.9353 21.0736 29.0898 20.5719 29.0898 20.0721C29.0898 19.5106 28.916 18.9896 28.5878 18.5651C28.5106 18.4879 28.221 18.1599 27.9508 17.8898C26.3678 16.1918 22.2365 13.4132 20.0743 12.5642C19.7461 12.431 18.916 12.1397 18.472 12.1204Z"
                                fill="white"/>
                        </svg>
                        See how we works
                    </span>
                </div>
                <div className={`item_second`}>
                    <div className={`item_second_left_block`}>
                        <div className={`white_square`}></div>
                        <svg width="309" height="208" viewBox="0 0 309 208" fill="none" xmlns="http://www.w3.org/2000/svg" className={`arrow_bottom`}>
                            <path d="M-28.419 1.1787C15.2564 45.8467 124.048 126.845 209.81 93.4927C295.573 60.1406 305.102 145.109 299.146 191.762"
                                  stroke="#6C60FE" strokeWidth="2" strokeDasharray="5 5"/>
                            <path d="M297.994 206.329L291.172 192.148L306.864 193.331L297.994 206.329Z" fill="#7C71FF"/>
                        </svg>

                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cash_svg`}>
                            <g clipPath="url(#clip0_2_100)">
                                <path
                                    d="M45.6635 42.6488L42.5251 40.5499C41.837 40.0897 41.6516 39.1556 42.1118 38.4676C42.5719 37.7795 43.506 37.5942 44.194 38.0544L49.4929 41.5981L51.4947 38.6047L48.8774 36.8543L50.1752 34.9136L47.1819 32.9117L45.8755 34.8651C43.575 33.5586 40.6122 34.2322 39.1184 36.4657C37.5544 38.8043 38.1846 41.9792 40.5232 43.5432L43.6616 45.6421C44.411 46.1433 44.6129 47.1605 44.1117 47.9098C43.6106 48.6591 42.5934 48.861 41.8441 48.3599L35.0811 43.837L33.0792 46.8303L36.3919 49.0457L35.094 50.9864L38.0873 52.9883L39.3852 51.0476L39.8422 51.3532C42.2421 52.9582 45.5001 52.3115 47.1051 49.9117C48.71 47.5118 48.0634 44.2538 45.6635 42.6488V42.6488Z"
                                    fill="#FFDE55"/>
                                <path
                                    d="M39.3854 51.0474L39.8423 51.353C42.2422 52.958 45.5002 52.3113 47.1052 49.9115C48.7102 47.5116 48.0635 44.2536 45.6636 42.6486L43.7133 41.3442L41.7114 44.3376L43.6618 45.6419C44.4111 46.1431 44.613 47.1603 44.1119 47.9096C43.6107 48.6589 42.5935 48.8608 41.8442 48.3597L39.8938 47.0553L36.5941 51.9894L38.0875 52.9881L39.3854 51.0474Z"
                                    fill="#FFB655"/>
                                <path d="M49.4929 41.5981L51.4948 38.6047L48.8773 36.8542L50.1752 34.9135L48.6818 33.9148L45.3821 38.8488L49.4929 41.5981Z"
                                      fill="#FFB655"/>
                                <path
                                    d="M50.7071 30.8866C54.0125 33.0971 56.1052 36.4508 56.813 40.0758L72.8487 36.893C72.8459 36.8784 72.8434 36.8639 72.8406 36.8494C71.2439 28.8041 66.6096 21.8624 59.7917 17.3027C52.9737 12.743 44.7883 11.1113 36.7432 12.7083C31.4994 13.7489 26.7249 16.0811 22.7727 19.4664L33.392 31.9024C38.1615 27.8325 45.2447 27.2335 50.7071 30.8866Z"
                                    fill="#A5E887"/>
                                <path
                                    d="M72.8406 36.8494C71.2438 28.8041 66.6096 21.8624 59.7916 17.3027L50.7071 30.8866C54.0124 33.0972 56.1052 36.4508 56.813 40.0758L72.8486 36.893C72.8458 36.8784 72.8435 36.8639 72.8406 36.8494V36.8494Z"
                                    fill="#00CC76"/>
                                <path
                                    d="M34.7356 54.7683C28.1513 50.365 26.377 41.4258 30.7804 34.8417C31.8203 33.2866 33.1135 32.0003 34.5688 30.9998L23.9208 18.5304C21.3377 20.533 19.0665 22.9611 17.1966 25.7572C12.637 32.575 11.0052 40.7605 12.6021 48.8058C14.1988 56.8508 18.8331 63.7927 25.651 68.3524C30.5476 71.6271 36.1498 73.3915 41.8987 73.5342L43.1873 57.1793C40.2853 57.2776 37.328 56.5021 34.7356 54.7683V54.7683Z"
                                    fill="#FF8859"/>
                                <path
                                    d="M43.1874 57.1791C40.2855 57.2773 37.3281 56.5019 34.7357 54.7682L25.6511 68.3522C30.5477 71.6269 36.1499 73.3913 41.8988 73.534L43.1874 57.1791Z"
                                    fill="#FF5B5B"/>
                                <path
                                    d="M68.2461 59.8979C72.8058 53.08 74.4375 44.8945 72.8406 36.8494C72.7328 36.3064 72.6101 35.769 72.4749 35.2364L56.3897 38.4291C57.6829 42.4624 57.1943 47.027 54.6621 50.8133C51.6672 55.2914 46.5743 57.5435 41.5511 57.1413L40.2662 73.4485C43.0514 73.6675 45.884 73.5055 48.6994 72.9467C56.7446 71.3501 63.6864 66.7159 68.2461 59.8979V59.8979Z"
                                    fill="#4895FF"/>
                                <path
                                    d="M68.2461 59.8979C72.8058 53.08 74.4375 44.8945 72.8406 36.8494C72.7328 36.3064 72.6101 35.769 72.4749 35.2364L56.3897 38.4291C57.6829 42.4624 57.1943 47.027 54.6621 50.8133C51.6672 55.2914 46.5743 57.5435 41.5511 57.1413L40.2662 73.4485C43.0514 73.6675 45.884 73.5055 48.6994 72.9467C56.7446 71.3501 63.6864 66.7159 68.2461 59.8979V59.8979Z"
                                    fill="#515BE0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_100">
                                    <rect width="61.4137" height="61.4137" fill="white" transform="translate(34.2669 0.232422) rotate(33.7736)"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                    <div className={`img`}>
                        <div className={`blur`}/>
                        <img src={imageSelf} alt=""/>
                    </div>

                    <div className={`item_second_right_block`}>
                        <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg" className={`graf_svg`}>
                            <rect x="0.017334" y="52.0637" width="93.8855" height="88.7627" rx="10" transform="rotate(-33.1496 0.017334 52.0637)"
                                  fill="#F9F8FF"/>
                            <g clipPath="url(#clip0_7_3688)">
                                <path
                                    d="M44.328 74.0165L43.6783 76.2118L54.9357 96.9331L57.131 97.5828L59.2648 96.4235C59.6576 96.2101 59.8031 95.7187 59.5897 95.3259L47.5594 73.1821C47.346 72.7893 46.8546 72.6439 46.4618 72.8573L44.328 74.0165Z"
                                    fill="#FF8730"/>
                                <path
                                    d="M40.4089 77.0667L52.4392 99.2105C52.6526 99.6033 53.144 99.7487 53.5368 99.5353L57.131 97.5827L44.328 74.0164L40.7338 75.9691C40.341 76.1825 40.1955 76.6739 40.4089 77.0667Z"
                                    fill="#FFA436"/>
                                <path
                                    d="M48.0894 57.1112L47.4398 59.3065L58.6972 80.0278L60.8925 80.6775L63.0263 79.5183C63.4191 79.3049 63.5645 78.8134 63.3511 78.4206L51.3209 56.2768C51.1075 55.884 50.616 55.7386 50.2232 55.952L48.0894 57.1112Z"
                                    fill="#FFBC2B"/>
                                <path
                                    d="M44.1704 60.1615L56.2006 82.3052C56.414 82.698 56.9055 82.8435 57.2983 82.6301L60.8925 80.6774L48.0894 57.1111L44.4952 59.0638C44.1024 59.2772 43.957 59.7686 44.1704 60.1615Z"
                                    fill="#FFCF66"/>
                                <path
                                    d="M61.1183 57.2643L60.4686 59.4596L71.726 80.1809L73.9213 80.8306L76.0551 79.6713C76.4479 79.4579 76.5934 78.9665 76.3799 78.5737L64.3497 56.4299C64.1363 56.0371 63.6449 55.8917 63.2521 56.1051L61.1183 57.2643Z"
                                    fill="#61CE5A"/>
                                <path
                                    d="M57.1992 60.3145L69.2294 82.4583C69.4428 82.8511 69.9343 82.9965 70.3271 82.7831L73.9213 80.8305L61.1183 57.2642L57.5241 59.2169C57.1313 59.4303 56.9858 59.9217 57.1992 60.3145V60.3145Z"
                                    fill="#94E368"/>
                                <path
                                    d="M64.7123 40.0509L64.0626 42.2462L75.32 62.9675L77.5153 63.6172L79.6491 62.458C80.0419 62.2446 80.1873 61.7531 79.9739 61.3603L67.9437 39.2165C67.7303 38.8237 67.2388 38.6783 66.846 38.8917L64.7123 40.0509Z"
                                    fill="#24C0FF"/>
                                <path
                                    d="M60.7932 43.1009L72.8235 65.2447C73.0369 65.6375 73.5283 65.7829 73.9211 65.5695L77.5153 63.6169L64.7123 40.0506L61.1181 42.0032C60.7253 42.2166 60.5798 42.7081 60.7932 43.1009Z"
                                    fill="#47D4FF"/>
                                <path
                                    d="M71.507 28.7286L70.8574 30.924L82.1148 51.6452L84.3101 52.2949L86.4439 51.1357C86.8367 50.9223 86.9821 50.4308 86.7687 50.038L74.7385 27.8943C74.5251 27.5015 74.0336 27.356 73.6408 27.5694L71.507 28.7286Z"
                                    fill="#3A6FD8"/>
                                <path
                                    d="M67.588 31.7791L79.6182 53.9229C79.8316 54.3157 80.3231 54.4612 80.7159 54.2478L84.3101 52.2951L71.507 28.7288L67.9128 30.6815C67.52 30.8949 67.3746 31.3863 67.588 31.7791Z"
                                    fill="#3B88F5"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7_3688">
                                    <rect width="53.6391" height="53.6391" fill="white" transform="translate(27.2195 52.7893) rotate(-28.5143)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="338" height="208" viewBox="0 0 338 208" fill="none" xmlns="http://www.w3.org/2000/svg" className={`arrow_right_svg`}>
                            <path d="M1.22571 207C44.9011 162.332 153.693 81.3337 239.455 114.686C325.218 148.038 334.747 63.0693 328.791 16.416"
                                  stroke="#6C60FE" strokeWidth="2" strokeDasharray="5 5"/>
                            <path d="M324.779 2.62506L335.68 13.9745L320.4 17.7404L324.779 2.62506Z" fill="#7C71FF"/>
                        </svg>


                        <div className={`white_square`}>

                        </div>
                    </div>


                </div>
                <div className={`item_third`}>
                    <span>Серитификаты</span>
                    <div className={`item_third_ser`}>
                        <img src={'https://www.ph4.ru/DL/LOGO/y/ya_direct.gif'} alt="yandex"/>
                        <img src={'https://www.ph4.ru/DL/LOGO/y/ya_metrika.gif'} alt="Ym"/>
                        <img src={'https://www.ph4.ru/DL/LOGO/g/g_adwords_.gif'} alt="google"/>
                        <img src={'https://www.ph4.ru/DL/LOGO/g/g_analytics__.gif'} alt="google"/>
                        <img src={'https://www.ph4.ru/DL/LOGO/g/g_apps.gif'} alt="google"/>


                    </div>
                </div>
                <div className={`item_forth`}>
                    <div className={`item_forth_text`}>
                        <span>Real time currency check <br/>and easier tracking system</span>
                        <span>Quo is the most easier way for transaction with your friends and family,
                            <br/> No matter where are you. An exceptional way for make your life one step easier.
                            <br/> Quo is the most easier way for transaction with your friends and family. </span>
                        <button>Explore Now -></button>
                    </div>
                    <div className={`item_forth_card`}>
                        <div className={`gray_square`}><img src={Emoji} alt=""/></div>
                        <div className={`white_square`}><img src={Emoji2} alt=""/></div>
                       {/* <div className={`square_img square_gray`}>

                        </div>*/}
                       {/* <div className={`square_img square_white`}>
                            <img src={Emoji2} alt=""/>
                        </div>*/}
                    </div>
                </div>
                <div className={`item_fifth`}>
                    <span>How Quo works?</span>
                    <span>Quo is the most easier way for transaction with your friends and family, No matter where are you. An exceptional way for make your life one step easier</span>
                </div>
                <div className={`item_six`}>
                    <div>
                        <logo1/>
                        <span>Create accont</span>
                        <span>Create free account for your transaction. It’s pretty much easier and don’t worry we care about your safety</span>
                    </div>
                    <div>
                        <logo2/>
                        <span>Enter Recipent Info</span>
                        <span>Create free account for your transaction. It’s pretty much easier and don’t worry we care about your safety</span>
                    </div>
                    <div>
                        <logo3/>
                        <span>Send money</span>
                        <span>Create free account for your transaction. It’s pretty much easier and don’t worry we care about your safety</span>
                    </div>
                </div>
                <div className={`item_seven`}>
                    <span>Worthy features that you will love</span>
                </div>
                <div className={`item_eight`}>
                    <div className={`left_block`}>
                        <div>
                            <svg width="338" height="208" viewBox="0 0 338 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M337.137 207.165C293.462 162.497 184.67 81.4991 98.9077 114.851C13.1451 148.203 3.6159 63.2347 9.57162 16.5814"
                                      stroke="#6C60FE" strokeWidth="2" strokeDasharray="5 5"/>
                                <path d="M13.5842 2.79046L2.68306 14.1399L17.9625 17.9058L13.5842 2.79046Z" fill="#7C71FF"/>
                            </svg>

                        </div>
                        <div>иконки</div>
                        <div> карточка</div>
                        <img src={Emoji3} alt=""/>
                        <img src={Emoji4} alt=""/>
                    </div>
                    <div className={`right_block`}>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;
