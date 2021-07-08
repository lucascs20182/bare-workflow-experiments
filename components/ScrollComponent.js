import React, { useState } from 'react';

import {
  View, Text, StyleSheet, Switch, ScrollView
} from 'react-native';

const ScrollComponent = () => {
  const [estaLigado, setEstaLigado] = useState(true);

  return (
    <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id cum rerum saepe libero atque voluptate debitis, exercitationem, quae neque quam consectetur nobis consequatur hic corrupti possimus aliquam dicta. Non quibusdam totam magnam sint dolore dolorum, atque aperiam quo eos ex aliquid quia consectetur a esse? Adipisci saepe enim tempora dolor excepturi nisi non, deserunt obcaecati harum consequuntur voluptatibus impedit perferendis pariatur! Necessitatibus ea ullam ipsum nobis! Nulla, fuga, corrupti vitae officia id voluptatem modi quos sunt esse ab, possimus error? Animi ducimus dolores sequi iure quia labore quasi reiciendis nemo, tempore, sint nihil ad molestiae, unde modi! Vitae, voluptas possimus quaerat ut labore, ea nobis quidem iusto at quo inventore alias, repellat distinctio iure similique officia deserunt adipisci mollitia iste recusandae? Error obcaecati repellendus labore id consectetur molestiae iusto maxime architecto? Iusto repellat explicabo adipisci tempore repudiandae quia, ipsum esse. Quo, iste deserunt quod a ipsa esse? Libero incidunt consectetur suscipit excepturi nesciunt eveniet. Dolor voluptatum facere beatae quaerat sapiente. Dolorem culpa iste error esse voluptates amet perferendis non quis velit? Et esse corrupti reprehenderit ratione ipsum, nihil optio nesciunt quibusdam commodi sed impedit iure aut nostrum, excepturi labore, illum debitis nobis tempora iusto. Quisquam exercitationem earum inventore accusantium omnis?
          </Text>
        </ScrollView>
        
        <Switch value={estaLigado}
          onValueChange={setEstaLigado} style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  texto: {
    fontSize: 30,
  }
});

export default ScrollComponent;
