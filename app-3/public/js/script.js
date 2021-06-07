$(()=>{
    var sensor1 = new ProgressBar.SemiCircle($('.sensor-1')[0], {
        color: '#FC5B3F',
        trailColor: '#EEE',
        trailWidth: 6,
        strokeWidth: 5,
        duration: 1000,
        text: {
            value: '',
            className: 'sensor-label',
            aliginToBottom: true
        },
        from: {color: '#27FF3E'},
        to: {color: '#FF2727'},
        step: (state, bar)=>{
            bar.path.setAttribute('stroke', state.color);
            var value = (bar.value()*100).toFixed(1);
            if (value == 0){
                bar.setText('');
            }else{
                bar.setText(value);
            }
            bar.text.style.color = state.color;
        }
    });

    var sensor2 = new ProgressBar.SemiCircle($('.sensor-2')[0], {
        color: '#FC5B3F',
        trailColor: '#EEE',
        trailWidth: 6,
        strokeWidth: 5,
        duration: 1000,
        text: {
            value: '',
            className: 'sensor-label',
            aliginToBottom: true
        },
        from: {color: '#27FF3E'},
        to: {color: '#FF2727'},
        step: (state, bar)=>{
            bar.path.setAttribute('stroke', state.color);
            var value = (bar.value()*100).toFixed(1);
            if (value == 0){
                bar.setText('');
            }else{
                bar.setText(value);
            }
            bar.text.style.color = state.color;
        }
    });

    var socket = io();
    socket.on('lectura-1', (data)=>{
        data = parseFloat(data/100);
        sensor1.animate(data);
    });
    socket.on('lectura-2', (data)=>{
        data = parseFloat(data/100);
        sensor2.animate(data);
    });
});

