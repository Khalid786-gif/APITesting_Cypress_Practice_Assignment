describe('API Testin Cypress on simple Book', () => {
    it('List of User', () => {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2',
            headers:{'Content-Type':'application/json'} 
        }).then((response)=>{expect(response.status).to.eq(200)})
    });


    it('Get Single User', () => {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2',
            headers:{'Content-Type':'application/json'} 
        }).then((response)=>{expect(response.status).to.eq(200)})
    });


    it('Create User', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{"name": "morpheus", "job": "leader"},
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(201)
           cy.log(JSON.stringify(response.body))
        })
    });



    it('Single user not found', () => {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/23',
            headers:{'Content-Type':'application/json'},
            failOnStatusCode: false
        }).then((response)=>{expect(response.status).to.eq(404)
            cy.log(JSON.stringify(response.body))
         })
    });


    it('List <resource>', () => {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/unknown',
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
         })
    });


    it('update using PUT', () => {
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            },
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
         })
    });



    it('Update using Patch', () => {
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            },
            headers:{'Content-Type':'application/json'}

        }).then((response)=>{expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
         })
    });


    it('Delete', () => {
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(204)
            cy.log(JSON.stringify(response.body))
         })
    });


    it('Register - successful', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/register',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
         })
        
    });


    it('Register - Unsuccessful', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/register',
            body:{
                "email": "sydney@fife"
            },
            headers:{'Content-Type':'application/json'},
            failOnStatusCode: false
        }).then((response)=>{expect(response.status).to.eq(400)
            cy.log(JSON.stringify(response.body))
         })
    });





});