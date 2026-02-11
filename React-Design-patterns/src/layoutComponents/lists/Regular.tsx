type RegularProps = {
  items: any[];
  sourceNmae: string;
  ItemComponents: React.ComponentType<{ item: any; sourceNmae: string }>;
};
export default function Regular({ items, sourceNmae, ItemComponents }) {
  return (
    <div>
      {items.map((item, index) => (
        <ItemComponents key={index} item={item} {...{ [sourceNmae]: item }} />
      ))}
    </div>
  );
}
