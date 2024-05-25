let app = angular.module("Myapp", []);

app.controller("Mycontroller", function($scope){
    $scope.nombre = "pedro";
    $scope.nuevoComentario = [];
    $scope.comentarios = [
        {
            comentario: "primer comentario",
            usuario : "pimer usuario"
        },
        {
            comentario: "segundo comentario",
            usuario: "segundo usuario"
        }
    ]
    $scope.agregarComenario = function () {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});