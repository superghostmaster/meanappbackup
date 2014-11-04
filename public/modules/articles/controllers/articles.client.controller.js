'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;
    $scope.create = function() {
      var article = new Articles({
				title: this.title,
				content: this.content,
        keywords: this.keywords,
        keywordstwo: this.keywordstwo,
        keywordsthree: this.keywordsthree
        
        
      });
			
      article.$save(function(response) {
				$location.path('articles/' + response._id);
        $scope.title = '';
				$scope.content = '';
        $scope.keywords = '';
        $scope.keywordstwo = '';
        $scope.keywordsthree = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
    
		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
      }, 
        function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
      
    };
    
    $scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
    
    $scope.upVotes = function(article) {
      article.votes += 1;
		};
    
    
    $scope.downVotes = function(article) {
      article.votes -= 1;
    }; 
  }
]);