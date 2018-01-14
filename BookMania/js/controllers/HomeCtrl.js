/**
 * HomeCtrl controller
 *
 * Purpose: This controller includes all the functionality related to Home Page for BookMania.
 *
 */
bookMania.controller('HomeCtrl', ['$scope','$location','BookManiaService',
    function($scope, $location, BookManiaService) {

        $scope.selectedTab = 'home';
        $scope.booksCategorySelected = '';
        $scope.isBookDetails = false;
        $scope.bookDetails = {};

        $scope.tabSelection = function(tab){
            $scope.selectedTab = tab;
            if(tab == 'home'){
                $location.path("/home");
            }
            
        }

//initialisation of UI grid
        $scope.gridOptions = {
            enableSorting: false,
            enableFullRowSelection : true,
    enableFiltering: false,
    multiSelect : false,
    noUnselect:true,
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        $scope.bookDetails = row.entity;
        $scope.isBookDetails = !$scope.isBookDetails;
        console.log($scope.bookDetails);
    });
    },
    columnDefs: [
      { field: 'rank', displayName: 'Rank',width: '7%' },
      { field: 'book_details[0].title', displayName: 'Title',width: '25%'},
      { field: 'book_details[0].author', displayName: 'Author',width: '20%'},
      { field: 'book_details[0].description', displayName: 'Description',width: '48%'}
    ]
  };
        //take category from the user and fetch bookslist accordingly
        $scope.fetchResultsBasedOnCategory = function(){
            BookManiaService.fetchListBasedOnCategory($scope.booksCategorySelected).then(function(response) {
                    $scope.gridOptions.data = response.data.results;
                },
                function(err) {
                    return false;
                });
        }
}]);