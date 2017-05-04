describe( 'Backbone', function(){
    it( 'should be defined', function(){
        expect( Backbone ).toBeDefined();
        expect( Backbone.Model ).toBeDefined();
        expect( Backbone.View ).toBeDefined();
        expect( Backbone.Collection ).toBeDefined();
    });
});

describe( 'Backbone Radio', function(){
    it( 'should be defined', function(){
        expect( Backbone.Radio ).toBeDefined();
    });
});

describe( 'Backbone Marionette', function(){
    it( 'should be defined', function(){
        expect( Marionette ).toBeDefined();
    });
});