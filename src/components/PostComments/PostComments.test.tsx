import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('Teste para o componente PostComments', () => {
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);
        const textarea = screen.getByRole('textbox');
        const submitButton = screen.getByRole('button', { name: /comentar/i });

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
});
