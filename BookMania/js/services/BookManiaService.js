/**
 * BookManiaService Service
 *
 * Purpose : It Contains all BookMania Services(AJAX calls) which is used in whole BookMania application.
 */
bookMania.service('BookManiaService', function($http) {

    var url = 'http://api.nytimes.com/svc/books/v3/lists/';

    this.fetchListBasedOnCategory = function(category){
        url += '?' + $.param({
              'api-key': "577b8afaa5334cb0b6902abe9c77a1b3",
              'list-name': category,
              'sort-order': "DESC"
            });
        return $http({
            method: 'GET',
            url: url
        }).
        success(function(data, status, headers, config) {
            if(status == 200){
                return data;
            }
        }).
        error(function(data, status, headers, config) {
           
                alert('Unexpected server error.');
            
        });
    }

});