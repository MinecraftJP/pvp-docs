ポーション効果
==============

ポーション効果はキットなどに使用されます。 ポーション名についてはPotionEffectTypeをご覧ください。

.. code-block:: xml

   <potion duration="4" amplifier="100">slow</potion>

<potion>タグの属性
^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明

   ``duration``, 持続時間を秒で指定します。無制限にするには ``oo`` を指定します。
   ``amplifier``, 効果の強さを指定します。
