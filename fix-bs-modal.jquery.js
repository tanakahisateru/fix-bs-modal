jQuery.fn.fixBsModal = function () {
    if (!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) { // enough?
        return;
    }
    this.data('currentScrollTop', 0);
    this.on('show.bs.modal', function () {
        var currentScrollTop = $(window).scrollTop();
        var props = {
            position: 'fixed',
            top: -currentScrollTop
        };
        $(window).scrollTop(0);
        $('body').css(props);
        $(this).data('currentScrollTop', currentScrollTop);
    }).on('hidden.bs.modal', function () {
        $('body').css({
            position: '',
            top: ''
        });
        $(window).scrollTop($(this).data('currentScrollTop'));
    });
};
