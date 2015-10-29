angular
	.module('gemStore', [])
	.controller('StoreController', function () {
		var gem = { name: 'Azurite', price: 2.83 };
        
        this.product = gem;
    });