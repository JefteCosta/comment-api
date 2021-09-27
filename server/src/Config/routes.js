module.exports = app =>{
    app.route('/api/comments')
    .post(app.src.controllers.api.comments.save)
    .get(app.src.controllers.api.comments.show);
    
}