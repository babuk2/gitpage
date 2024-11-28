const touristsData = [
    { YEARS: 2011, LOCAL: 7366852, FOREIGN: 7658, SUM: 7374510 },
    { YEARS: 2012, LOCAL: 7086322, FOREIGN: 17952, SUM: 7104274 },
    { YEARS: 2013, LOCAL: 8938098, FOREIGN: 36546, SUM: 8974644 },
    { YEARS: 2014, LOCAL: 8026991, FOREIGN: 49157, SUM: 8076148 },
    { YEARS: 2015, LOCAL: 6338737, FOREIGN: 38565, SUM: 6377302 },
    { YEARS: 2016, LOCAL: 6041764, FOREIGN: 34793, SUM: 6076557 },
    { YEARS: 2017, LOCAL: 7704245, FOREIGN: 18605, SUM: 7722850 },
    { YEARS: 2018, LOCAL: 6217951, FOREIGN: 11713, SUM: 6229664 },
    { YEARS: 2019, LOCAL: 5538325, FOREIGN: 2081, SUM: 5540406 },
    { YEARS: 2020, LOCAL: 6592716, FOREIGN: 787, SUM: 6593503 },
    { YEARS: 2021, LOCAL: 5634396, FOREIGN: 736, SUM: 5635132 },
    { YEARS: 2022, LOCAL: 5492543, FOREIGN: 257, SUM: 5492800 },
    { YEARS: 2023, LOCAL: 5795092, FOREIGN: 1053, SUM: 5796145 }
];

const tourMonthData = [
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '1월', YEAR_23: 8766 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '2월', YEAR_23: 8906 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '3월', YEAR_23: 6560 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '4월', YEAR_23: 8288 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '5월', YEAR_23: 10129 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '6월', YEAR_23: 11493 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '7월', YEAR_23: 12743 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '8월', YEAR_23: 13089 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '9월', YEAR_23: 10876 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '10월', YEAR_23: 10869 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '11월', YEAR_23: 7502 },
  { CATEGORY: '망상리조트_월별_이용객_현황', MONTH: '12월', YEAR_23: 8570 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '1월', YEAR_23: 2560 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '3월', YEAR_23: 2912 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '4월', YEAR_23: 3072 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '5월', YEAR_23: 4004 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '6월', YEAR_23: 4012 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '7월', YEAR_23: 3848 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '8월', YEAR_23: 4076 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '9월', YEAR_23: 4108 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '10월', YEAR_23: 4060 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '11월', YEAR_23: 2876 },
  { CATEGORY: '추암오토캠핑장_월별_이용객_현황', MONTH: '12월', YEAR_23: 2652 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '1월', YEAR_23: 2050 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '2월', YEAR_23: 2046 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '3월', YEAR_23: 2300 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '4월', YEAR_23: 3634 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '5월', YEAR_23: 4460 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '6월', YEAR_23: 5808 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '7월', YEAR_23: 7556 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '8월', YEAR_23: 8092 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '9월', YEAR_23: 4892 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '10월', YEAR_23: 4638 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '11월', YEAR_23: 2274 },
  { CATEGORY: '망상_제2캠핑장_월별_이용객_현황', MONTH: '12월', YEAR_23: 2738 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '1월', YEAR_23: 8508 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '2월', YEAR_23: 8996 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '3월', YEAR_23: 6946 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '4월', YEAR_23: 10722 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '5월', YEAR_23: 13360 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '6월', YEAR_23: 14528 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '7월', YEAR_23: 24193 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '8월', YEAR_23: 35113 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '9월', YEAR_23: 12322 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '10월', YEAR_23: 13319 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '11월', YEAR_23: 7443 },
  { CATEGORY: '천곡황금박쥐동굴_월별_이용객_현황', MONTH: '12월', YEAR_23: 8169 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '1월', YEAR_23: 10083 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '2월', YEAR_23: 10558 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '3월', YEAR_23: 19211 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '4월', YEAR_23: 34362 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '5월', YEAR_23: 43345 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '6월', YEAR_23: 53730 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '7월', YEAR_23: 41402 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '8월', YEAR_23: 49075 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '9월', YEAR_23: 22127 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '10월', YEAR_23: 64406 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '11월', YEAR_23: 27219 },
  { CATEGORY: '무릉계곡_월별_이용객_현황', MONTH: '12월', YEAR_23: 26452 }
];

const pieTourData = [
  { KINDS: '망상 제2캠핑장', SUM: 50488 },
  { KINDS: '천곡황금박쥐동굴', SUM: 163619 },
  { KINDS: '망상리조트', SUM: 117791 },
  { KINDS: '추암오토캠핑장', SUM: 38180 },
  { KINDS: '무릉계곡', SUM: 401970 }
]

//인공암벽장
const artificialRockClosetData = [ { YEAR: '2022', COUNT: '486' },{ YEAR: '2023', COUNT: '573' }  ];

//무릉파크골프장
const mulleungParkGolfData = [ { YEAR: '2023', COUNT: '2214' } ];

//해오름스포츠 스크린골프장
const haeoreumScreenGolfData =  [ { YEAR: '2023', COUNT: '538' } ];

// 동해체육관
const donghaeGymnasiumData = [
  { YEAR: '2019', COUNT: '92,849' },
  { YEAR: '2020', COUNT: '50,135' },
  { YEAR: '2021', COUNT: '63,803' },
  { YEAR: '2022', COUNT: '56,220' },
  { YEAR: '2023', COUNT: '62,021' }
];

// 국민체육센터
const nationalSportsCenterData = [
  { YEAR: '2019', COUNT: '137,978' },
  { YEAR: '2020', COUNT: '59,031' },
  { YEAR: '2021', COUNT: '100,597' },
  { YEAR: '2022', COUNT: '73,504' },
  { YEAR: '2023', COUNT: '98,134' }
];

// 종합경기장
const sportsComplexData = [
  { YEAR: '2019', COUNT: '32,722' },
  { YEAR: '2020', COUNT: '9,653' },
  { YEAR: '2021', COUNT: '27,854' },
  { YEAR: '2022', COUNT: '31,554' },
  { YEAR: '2023', COUNT: '26,034' }
];
