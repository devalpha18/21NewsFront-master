import { Component } from "react";
import RestApi from '../../components/shared/ApiGateway';
import { NEWS_API_URL, REVIEW_API_URL } from '../../config/env';
const _apiGateway = new RestApi();


class DataSource extends Component {
    constructor(props) {
        super(props);

    }


    fetchNewsByCat = async (url, data) => {

        var resp = await _apiGateway.fetchDataByPost(url, data).then((result) => {
            let arr = result.data;
            for (var i = 0; i < arr.length; i++) {
                var id = arr[i]['_id'];
                var avatar = arr[i]['news_image'];
                var tag = arr[i]['address'];
                var title = arr[i]['news_title'];
                var description = arr[i]['short_description'];
            }

            var details = {
                id: id,
                avatar: avatar,
                tag: tag,
                title: title,
                description: description,
            };
            return details;

        }).catch(error => { return error });

        return resp;
    }


    fetchSubNewsByCat = async (url, data) => {
        var resp = await _apiGateway.fetchDataByPost(url, data).then((result) => {
            return result.data;
        }).catch(error => { return error });

        return resp;
    }

 
    fetchNews = async (searchItem) => {
        var data = { category: searchItem };
        const NEWS_CAT_URL = NEWS_API_URL + "news/category";
        return await this.fetchSubNewsByCat(NEWS_CAT_URL, data);
    }

    fetchAds = async (searchItem) => {
        const GET_ADS_URL = NEWS_API_URL + "get/ads";
        var data = { category: searchItem };
        return await _apiGateway.fetchDataByGet(GET_ADS_URL, data);
    }

    fetchTopBusinessesNear = async (searchItem) => {
        const GET_TOP_BUSINESSES_URL = REVIEW_API_URL + "fetch/topbusiness";
        var data = { category: searchItem };
        return await _apiGateway.fetchDataByGet(GET_TOP_BUSINESSES_URL, data);
    }

    fetchNewsWithVideos = async () => {
        const GET_NEWS_WITH_VIDEOS_URL = NEWS_API_URL + "news/videos";
        var data = {};
        return await _apiGateway.fetchDataByGet(GET_NEWS_WITH_VIDEOS_URL, data);
    }

    todaysPhoto = async () => {
        const TODAYS_PHOTO_URL = NEWS_API_URL + "news/photo/today";
        var data = {};
        return await _apiGateway.fetchDataByGet(TODAYS_PHOTO_URL, data);
    }

    yesterdaysPhoto = async () => {
        const YESTERDAYS_PHOTO_URL = NEWS_API_URL + "news/photo/yesterday";
        var data = {};
        return await _apiGateway.fetchDataByGet(YESTERDAYS_PHOTO_URL, data);
    }

    fetchPictures = async () => {
        const PHOTO_URL = NEWS_API_URL + "frontend/photoList";
        var data = {};
        return await _apiGateway.fetchDataByGet(PHOTO_URL, data);
    }

    fetchNewsCategories = async () => {
        const FETCH_URL = NEWS_API_URL + "news/categories";
        var data = {};
        return await _apiGateway.fetchDataByGet(FETCH_URL, data);
    }


    fetchTrendingNews = async () => {
        let data = {};
        let url = NEWS_API_URL + "news/trending";
        return await _apiGateway.fetchDataByGet(url, data);
    }

    
    fetchAfricanCountriesByRegion = async (region) => {
        let url = NEWS_API_URL + "african/countries?region="+region+"";
        return await _apiGateway.fetchDataByGet(url, {});
    }

    fetchCountryDataById = async (id) => {
        let url = NEWS_API_URL + "african/country/data?id="+id+"";
        return await _apiGateway.fetchDataByGet(url, {});
    }

    fetchNewsByCountry = async (country) => {
        let url = NEWS_API_URL + "news/country?country="+country+"";
        return await _apiGateway.fetchDataByGet(url, {});
    }

    incrementReviewCount = async (id) => {
        const data = { article_id: id };
        const endpoint = NEWS_API_URL + "frontend/review/article";
        return await _apiGateway.fetchDataByPost(endpoint, data);
    }

    fetchAdsByCategory = async (category) => {
        const data = { category: category };
        const endpoint = NEWS_API_URL + "frontend/get/ads";
        return await _apiGateway.fetchDataByPost(endpoint, data);
    }


  

}

export default DataSource;