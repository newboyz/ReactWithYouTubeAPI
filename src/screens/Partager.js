import React from 'react';
import { Share, View, Button } from 'react-native';

const Partager = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Ici le lien pour telecharger l\'application ',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Partager l'application" />
    </View>
  );
};

export default Partager;
