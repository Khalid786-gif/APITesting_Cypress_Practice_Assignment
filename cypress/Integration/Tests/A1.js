describe('A1', () => {
    it('Get Request', () => {
        cy.request({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/posts',
            headers:{'Content-Type':'Application/json'}
        }).then((response)=>{expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))})
    });


    it('Post_Request', () => {
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{ "title": "New Post", "body": "This is the body of the new post", "userId": 1 },
            headers:{'Content-Type':'application/json'}
        }).then((response)=>{expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))})
    });

    
    it('Update Request using Patch', () => {
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{ "title": "Updated Post", "body": "This is the updated body of the post", "userId": 1 },
            headers:{'Content-Type':'Application/json'}
        }).then((res)=>{expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body))})
    });


    it('Delete Request', () => {
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            headers:{'Content-Type':'Application/json'}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body))})
        
    });





});