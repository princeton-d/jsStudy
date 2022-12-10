// DOM
const searchBtn = document.querySelector('.main_search_button');
const searchBar = document.querySelector('.main_search_bar');
const mainSearchBarArea = document.querySelector('.main_search_bar_area'); // 지역 검색 버튼
const mainSearchBarAreaCategoryWrapper = document.querySelector('.main_search_bar_area_category_wrapper'); // 지역 카테고리
const mainSearchBarItem = document.querySelector('.main_search_bar_item'); // 분류 검색 버튼
const mainSearchBarItemCategoryWrapper = document.querySelector('.main_search_bar_item_category_wrapper'); // 분류 카테고리
const areaItem = document.querySelector('.area_item');
const areaDetailItem = document.querySelector('.main_search_bar_area_detail_category');
const itemItem = document.querySelector('.item_item');
const itemDetailItem = document.querySelector('.main_search_bar_item_detail_category');

// event Listener

/** 답례품 검색하기 버튼 클릭 이벤트
 * 클릭하면 초기 검색바 버튼이 사라짐
 * 이후 필터검색 화면 노출
 */
searchBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('hide');
  searchBar.classList.toggle('hide');
});

/** 지역 검색 버튼 클릭 */
mainSearchBarArea.addEventListener('click', (e) => {
  e.preventDefault();
  mainSearchBarArea.children[1].classList.toggle('active')
  mainSearchBarItem.children[1].classList.remove('active')
  mainSearchBarAreaCategoryWrapper.classList.toggle('hide');
  mainSearchBarItemCategoryWrapper.classList.add('hide')
});

/** 분류 검색 버튼 클릭 */
mainSearchBarItem.addEventListener('click', (e) => {
  e.preventDefault();
  mainSearchBarItem.children[1].classList.toggle('active')
  mainSearchBarArea.children[1].classList.remove('active')
  mainSearchBarAreaCategoryWrapper.classList.add('hide')
  mainSearchBarItemCategoryWrapper.classList.toggle('hide');
});

/** 지역 검색 카테고리 버튼 클릭 */
for (let i = 0; i < areaItem.children.length; i++) {
  areaItem.children[i].addEventListener('click', (e) => {
    for (let j = 0; j < areaItem.children.length; j++) {
      areaItem.children[j].classList.remove('active')
      areaDetailItem.children[j].classList.add('hide')
    }
    e.currentTarget.classList.toggle('active');
    areaDetailItem.children[i].classList.toggle('hide')

  })
}

/** 지역 디테일 검색 */
for (let i = 0; i < areaDetailItem.children.length; i++) {
  areaDetailItem.children[i].addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('active')
  })
}

/** 분류 검색 카테고리 버튼 클릭 */
for (let i = 0; i < itemItem.children.length; i++) {
  itemItem.children[i].addEventListener('click', (e) => {
    for (let j = 0; j < itemItem.children.length; j++) {
      itemItem.children[j].classList.remove('active')
      itemDetailItem.children[j].classList.add('hide')
    }
    e.currentTarget.classList.toggle('active');
    itemDetailItem.children[i].classList.toggle('hide')

  })
}

/** 분류 디테일 검색 */
for (let i = 0; i < itemDetailItem.children.length; i++) {
  itemDetailItem.children[i].addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('active')
  })
}