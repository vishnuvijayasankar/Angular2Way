var firstControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Vishnu";
};

var secondControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.lastName = "Vijaya Sankar";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
};

var thirdControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.middleName = "Vijaya";
  $scope.lastName = "Sankar";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
};

var firstControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.firstModelObj = {
    firstName: "Vishnu"
  };
};

var secondControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.secondModelObj = {
    lastName: "Vijaya Sankar"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.secondModelObj.lastName;
  };
};

var thirdControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.thirdModelObj = {
    middleName: "Vijaya",
    lastName: "Sankar"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.thirdModelObj.middleName + " " +
      $scope.thirdModelObj.lastName;
  };
};