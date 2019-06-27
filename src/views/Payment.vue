<template>
    <div>
        <h1>Payment</h1>
        <input type="number" class="form-control" v-model="amount">
        <p>{{ amount }}</p>
        <button class="btn btn-primary" @click="pay">Pay</button>
    </div>
</template>

<script>
import crypto from 'crypto';
import axios from '../axios';

export default {
    data() {
        return {
            amount: 0,
            key: '2diiou',
            salt: 'C6LHoqH4'
        }
    },
    methods: {
        pay() {
            let RequestData = {
                key: this.key,
                txnid: '12345',
                hash: '',
                amount: 1,
                firstname: 'Tester',
                email: 'test@testing.com',
                phone: '9999999999',
                productinfo: 'Bag',
                surl : 'http://localhost:8080/',
                furl: 'http://localhost:8080/payment',
                udf1: '',
                udf2: '',
                udf3: '',
                udf4: '',
                udf5: '',
                mode:'dropout'// non-mandatory for Customized Response Handling
            };
            let hashSequqnce = RequestData.key + '|' + RequestData.txnid + '|' + RequestData.amount + '|' + RequestData.productinfo + '|' + RequestData.firstname + '|' + RequestData.email + '|' + RequestData.udf1 + '|' + RequestData.udf2 + '|' + RequestData.udf3 + '|' + RequestData.udf4 + '|' + RequestData.udf5 + '||||||' + this.salt
            let hashValue = this.sha512(hashSequqnce);

            RequestData.hash = hashValue;
            
            let Handler = {
                responseHandler: function(BOLT){
                    console.log(BOLT);
                },
                catchException: function(BOLT){
                    console.log(BOLT);
                }
            };
            console.log(hashValue);
            bolt.launch(RequestData, Handler);
            //axios.post('?key=2diiou&txnid=12345&amount=1&productinfo=Sample Test&firstname=Tester&email =test@testing.com&phone=9999999999&surl=http://localhost:8080/&furl=http://localhost:8080/payment&hash=c1659cfc9976104bb2e32ab50efac4ea2ded8c764648be1f6c071afa8d684b4f1c4178b2eabc02dea06c96b5e90bd9b8d25d491dde146f848a10bbc4aab2766a&service_provider=payu_paisa')
             //   .then(res => console.log(res));
        },
        sha512(hashSequqnce) {
            let hash = crypto.createHmac('sha512', this.salt);
            hash.update(hashSequqnce);
            let value = hash.digest('hex');
            return value;
        }
    },
    created() {
        let boltScript = document.createElement('script');
        boltScript.setAttribute('id', 'bolt');
        boltScript.setAttribute('src', 'https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js');
        boltScript.setAttribute('bolt-color', '<color-code>');
        boltScript.setAttribute('bolt-logo', '<image path>');
        document.head.appendChild(boltScript);
    }
}
</script>
